import React, { useState, useEffect } from "react";
import axios from "axios";
const TopMovies = () => {
  const [searchData, setSearchData] = useState([]);
  const fetchMovies = async () => {
    const url = `http://www.omdbapi.com/?s=marvel&apikey=b53624b3`;
    const data = await axios
      .get(url)
      .then((res) => {
        setSearchData(res.data.Search);
        console.log(res.data.Search);
      })
      .catch((err) => console.log(err));
    if (data) {
      setSearchData(data);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="row">
      {searchData &&
        searchData.map((movie) => {
          return (
            <a href="/details">
              <div className="movie-item" key={movie.imdbID}>
                <img src={movie.Poster} alt="" />
                <h2>{movie.Title}</h2>
              </div>
            </a>
          );
        })}
    </div>
  );
};

export default TopMovies;
