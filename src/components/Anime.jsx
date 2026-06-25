import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Card from "./Card";
import styles from "./Anime.module.css";

function Anime() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("score_desc");
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        setLoading(true);
        const endpoint = query
          ? `${import.meta.env.VITE_JIKAN_API_URL}/anime?q=${query}&sfw`
          : `${import.meta.env.VITE_JIKAN_API_URL}/top/anime`;
        const { data } = await axios.get(endpoint);
        setAnimeList(data.data);
      } catch (error) {
        console.error("Error fetching anime:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, [query]);

  const getSortedAnime = () => {
    const sorted = [...animeList];
    switch (sortBy) {
      case "score_asc":
        return sorted.sort((a, b) => (a.score || 0) - (b.score || 0));
      case "title_asc":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "title_desc":
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case "score_desc":
      default:
        return sorted.sort((a, b) => (b.score || 0) - (a.score || 0));
    }
  };

  return (
    <div className={styles.animeListContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.listTitle}>
          {query ? `Search Results for "${query}"` : "Top Anime"}
        </h1>
        <div className={styles.sortContainer}>
          <label htmlFor="sort-by">Sort by:</label>
          <select
            id="sort-by"
            className={styles.sortDropdown}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="score_desc">Score: High to Low</option>
            <option value="score_asc">Score: Low to High</option>
            <option value="title_asc">Title: A-Z</option>
            <option value="title_desc">Title: Z-A</option>
          </select>
        </div>
      </div>
      {loading ? (
        <div className={styles.animeList}>
          {new Array(12).fill(0).map((_, index) => (
            <div key={index} className={styles.animeCardSkeleton}></div>
          ))}
        </div>
      ) : animeList.length > 0 ? (
        <div className={styles.animeList}>
          {getSortedAnime().map((anime) => (
            <Card anime={anime} key={anime.mal_id} />
          ))}
        </div>
      ) : (
        <p className={styles.noResults}>
          No results found. Please try another search.
        </p>
      )}
    </div>
  );
}

export default Anime;
