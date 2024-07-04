import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieDetails from "./MovieDetails";
import Search from "./Search";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  // eslint-disable-next-line
  const [year, setYear] = useState(2012);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term
  const moviesPerRequest = 20;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  // eslint-disable-next-line
  const [page, setPage] = useState(1);

  const updateMovies = async () => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${props.apiKey}&sort_by=popularity.desc&primary_release_year=${year}&page=${page}&vote_count.gte=100&with_genres=${props.genres}`;
    if (searchTerm.trim() !== "") {
      // If search results are present, update URL for search query
      url = `https://api.themoviedb.org/3/search/movie?api_key=${props.apiKey}&query=${searchTerm}`;
    }

    try {
      props.setProgress(10);
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(70);
      if (searchResults) {
        // Reset movies when fetching new data
        setMovies(parsedData.results.slice(0, moviesPerRequest));
      } else {
        setMovies(movies.concat(parsedData.results.slice(0, moviesPerRequest)));
      }
      setTotalResults(parsedData.total_results);
      setYear(year + 1);
      props.setProgress(100);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    updateMovies();
    // eslint-disable-next-line
  }, [searchResults]); // Trigger updateMovies on searchResults change

  const fetchMoreData = async () => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${props.apiKey}&sort_by=popularity.desc&primary_release_year=${year}&page=${page}&vote_count.gte=100&with_genres=${props.genres}`;
    if (searchTerm.trim() !== "") {
      // If search results are present, update URL for search query
      url = `https://api.themoviedb.org/3/search/movie?api_key=${props.apiKey}&query=${searchTerm}`;
    }
    let data = await fetch(url);
    let parsedData = await data.json();
    setMovies(movies.concat(parsedData.results.slice(0, moviesPerRequest)));
    setTotalResults(parsedData.total_results);
    setYear(year + 1);
  };

  const handleSearch = (results, term) => {
    setSearchResults(results);
    setSearchTerm(term);
  };

  return (
    <div className="container" style={{ marginTop: "78px" }}>
      <Search apiKey={props.apiKey} onSearch={handleSearch} />
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMoreData}
        hasMore={movies.length < totalResults && year <= currentYear}
        loader={<Spinner />}
      >
        <div className="row">
          {movies.map((element) => (
            <div className="col-md-4" key={element.id}>
              <MovieDetails element={element} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Movies;
