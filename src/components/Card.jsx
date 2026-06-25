import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ anime }) {
  return (
    <Link to={`/anime/${anime.mal_id}`} className="anime__card">
      <figure className="anime__img--wrapper">
        <img
          className="anime__img"
          src={anime.images.jpg.image_url}
          alt={anime.title}
        />
      </figure>
      <div className="anime__title">{anime.title}</div>
      <div className="anime__ratings">Score: {anime.score}</div>
    </Link>
  );
}

export default Card;
