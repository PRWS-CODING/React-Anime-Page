import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/anime?q=${search}`);
    }
  };

  return (
    <div className="home-container">
      <h1 className="title">Welcome to All things Anime!</h1>
      <form className="search-container" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for an anime..."
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </button>
      </form>
      <div className="browse-link-container">
        <Link to="/anime" className="browse-link">
          Or browse all anime
        </Link>
      </div>
    </div>
  );
}

export default Home;
