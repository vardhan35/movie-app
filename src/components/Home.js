import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import MovieData from "./MovieData";
import TopMovies from "./TopMovies";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const fetchMovies = async (searchTerm) => {
    const url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=b53624b3`;
    const data = await axios
      .get(url)
      .then((res) => {
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
      {!searchTerm ? (
        <div className="container_home">
          <Carousel />
          <TopMovies />
        </div>
      ) : (
        <MovieData searchData={searchData} />
      )}
    </div>
  );
};

export default Home;
