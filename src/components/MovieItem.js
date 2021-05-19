import React from "react";

const MovieItem = ({ movieData }) => {
  if (!movieData) {
    <h1>Hello World</h1>;
  }
  return (
    <div className="movie-item" key="">
      <img src={movieData.Poster} alt="" />
      <h2>{movieData.Title}</h2>
    </div>
  );
};

export default MovieItem;
