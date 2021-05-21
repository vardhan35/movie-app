import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const MovieItem = ({ movieData }) => {
  if (!movieData) {
    <h1>Hello World</h1>;
  }
  return (
    <Link to={"/" + movieData.imdbID}>
      <div className="movie-item" key="">
        <img src={movieData.Poster} alt="" />
        <h2>{movieData.Title}</h2>
      </div>
    </Link>
  );
};

export default MovieItem;
