import React from "react";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, fasakhMovie }) => {
  return (
    <div className="mvcards">
      <img className="image" src={movie.image} alt={movie.name} />
      <br />
      <h1 className="mvcard">{movie.name}</h1>
      <p style={{
    color: "white",
   
     
   }}>{movie.description}</p>
      <Rating name="read-only" value={movie.rating} readOnly />
      <Link to={`/Details/${movie.id}`}>
        <button> View Details </button>
      </Link>
      <button className="enzel" onClick={() => fasakhMovie(movie.id)}>X</button>
    </div>
  );
};

export default MovieCard;