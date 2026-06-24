import React from "react";
import "./Home.css";
import homeBackground from "./home-background.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${homeBackground})` }}
    >
      <h1 className="title">Welcome to All things Anime!</h1>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search" />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      </div>
    </div>
  );
}

export default Home;
