import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieItem from "./MovieItem";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
const Movielist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const fetchMovies = async (searchTerm) => {
    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=b53624b3`;
    const data = await axios
      .get(url)
      .then((res) => {
        // console.log("response", res.data.Search);
        setSearchData(res.data.Search);
      })
      .catch((err) => console.log(err));
    if (data) {
      setSearchData(data);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <div className="container">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Carousel />
      <div className="row">
        {searchData &&
          searchData.map((movie) => {
            return <MovieItem key={movie.imdbID} movieData={movie} />;
          })}
      </div>
    </div>
  );
};

export default Movielist;
