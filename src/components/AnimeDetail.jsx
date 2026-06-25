import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./AnimeDetail.module.css";

function AnimeDetail() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [streaming, setStreaming] = useState([]);
  const [anilistData, setAnilistData] = useState(null);

  useEffect(() => {
    const fetchAnimeDetail = async () => {
      try {
        setLoading(true);

        const anilistQuery = `
          query ($id: Int) {
            Media (idMal: $id, type: ANIME) {
              bannerImage
              averageScore
              popularity
              trending
            }
          }
        `;

        const [detailRes, streamingRes, anilistRes] = await Promise.all([
          axios.get(`https://api.jikan.moe/v4/anime/${id}`),
          axios.get(`https://api.jikan.moe/v4/anime/${id}/streaming`),
          axios.post("https://graphql.anilist.co", {
            query: anilistQuery,
            variables: { id: id },
          }),
        ]);

        setAnime(detailRes.data.data);
        setStreaming(streamingRes.data.data);
        setAnilistData(anilistRes.data.data.Media);
      } catch (error) {
        console.error("Error fetching anime details:", error);
      } finally {
        setLoading(false);
      }
    };
    // Add a small delay to avoid hitting API rate limits
    const timer = setTimeout(() => {
      fetchAnimeDetail();
    }, 350);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!anime) {
    return <div className={styles.loading}>Anime not found.</div>;
  }

  return (
    <div className={styles.detailContainer}>
      {anilistData?.bannerImage && (
        <div
          className={styles.banner}
          style={{ backgroundImage: `url(${anilistData.bannerImage})` }}
        />
      )}
      <h1 className={styles.title}>{anime.title}</h1>
      <div className={styles.content}>
        <img
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          className={styles.poster}
        />
        <div className={styles.info}>
          <p>
            <strong>Score:</strong> {anime.score} (Jikan) /{" "}
            {anilistData?.averageScore
              ? `${anilistData.averageScore} / 100 (AniList)`
              : "N/A"}
          </p>
          <p>
            <strong>Rank:</strong> {anime.rank}
          </p>
          <p>
            <strong>Episodes:</strong> {anime.episodes}
          </p>
          <p>
            <strong>Popularity:</strong> #{anilistData?.popularity}
          </p>
          <p>
            <strong>Trending:</strong> #{anilistData?.trending}
          </p>
          <p className={styles.synopsis}>{anime.synopsis}</p>
        </div>
      </div>
      <div className={styles.streamingSection}>
        <h2>Where to Watch</h2>
        {streaming.length > 0 ? (
          <div className={styles.streamingLinks}>
            {streaming.map((provider) => (
              <a
                key={provider.name}
                href={provider.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.streamingLink}
              >
                {provider.name}
              </a>
            ))}
          </div>
        ) : (
          <p>No official streaming links found.</p>
        )}
      </div>
    </div>
  );
}

export default AnimeDetail;
