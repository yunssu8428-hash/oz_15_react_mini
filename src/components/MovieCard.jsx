import React from "react";
import { useNavigate } from "react-router-dom"
import { IMAGE_BASE } from "../constants";

export default function MovieCard({ 
  id,
  posterPath,
  title,
  rating,
  tagline,
  overview,
  genres,
  runtime,
  release_date
}){
    const navigate = useNavigate();

    const onClick = () => {
      navigate("/details", {
        state: {
          movie:{
          id,
          title,
          rating,
          tagline,
          overview,
          genres,
          runtime,
          release_date,
          posterPath: posterPath
          }
        }
      });
    };

    return (
        <article className="movie-card" onClick={onClick}
        role="button">
          <img
          src={posterPath ? `${IMAGE_BASE}${posterPath}` : "/placeholder.png"}
          alt={title}
          className="poster"
          />
          <div className="meta">
            <h3 className="title">{title}</h3>
            <span className="rating">{rating}</span>
          </div>
        </article>
    );
}