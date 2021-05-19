import React from "react";
import MovieItem from "./MovieItem";

const MovieData = ({ searchData }) => {
  return (
    <div className="row">
      {searchData &&
        searchData.map((movie) => {
          return <MovieItem key={movie.imdbID} movieData={movie} />;
        })}
    </div>
  );
};

export default MovieData;
