import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";

const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [searchData, setSearchData] = useState([]);

  const fetchMovies = async (id) => {
    const url = `https://www.omdbapi.com/?i=${id}&apikey=b53624b3`;
    const data = await axios
      .get(url)
      .then((res) => {
        setSearchData(res.data);
        console.log(res.data);
        setLoading(true);
      })
      .catch((err) => console.log(err));
    if (data) {
      setSearchData(data);
    }
  };

  useEffect(() => {
    fetchMovies(id);
  }, [id]);
  return (
    <div className="container_details">
      <div className="details query">
        {loading ? (
          <>
            <div className="details_img">
              <img src={searchData.Poster} alt={searchData.Title} />
            </div>
            <div className="details_info query_info ">
              <h1>
                <span className="info_title">Title</span> : {searchData.Title}
              </h1>
              <h2>
                <span className="info_title">Genre</span> : {searchData.Genre}
              </h2>
              <p>"{searchData.Plot}"</p>
              <h3>
                <span className="info_title">Actors</span> : {searchData.Actors}
              </h3>
              <h3>
                <span className="info_title">Released Date</span> :{" "}
                {searchData.Released}
              </h3>
              <Link to="/">
                <button>Go Back</button>
              </Link>
            </div>
          </>
        ) : (
          <BarLoader color="white" loading />
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
