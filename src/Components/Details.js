import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { moviesData } from "../Constants/Data";


function Details() {
  const { id } = useParams();
  const movie = moviesData.find((movie) => movie.id == id);
  const navigate = useNavigate();
  console.log(movie);
  return (
    <div className="vid">
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <button className="oo" onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
}

export default Details;