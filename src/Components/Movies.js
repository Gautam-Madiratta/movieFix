import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieDetails from './MovieDetails';
import Search from './Search';
import { useLocation } from 'react-router-dom';
import NoMovieResults from './NoMoviesResult'
import "../Css/Movies.css"


const Movies = ({ apiKey, genres, setProgress,search}) => {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [year, setYear] = useState(2012);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const moviesPerRequest = 20;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const page = 1;
  const location = useLocation()

  const updateMovies = async () => {
    try {
      setYear(2012)
      let initialYear = 2012;
      let updatedSearchTerm = searchTerm; 
      // Reset searchTerm if not on search page
      if (location.pathname !== "/search") {
        setSearchTerm("");
        updatedSearchTerm = "";
      }
      
       // This will be the updated state value
      let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&primary_release_year=${initialYear}&page=${page}&vote_count.gte=100&with_genres=${genres}`;
  
      // Update URL based on updated searchTerm
      if (updatedSearchTerm.trim() !== "") {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(updatedSearchTerm)}`;
      }
  
      setProgress(10);
      let data = await fetch(url);
      setProgress(30);
      let parsedData = await data.json();
      setProgress(70);
  
      // Update movies based on searchResults flag
    //  if (searchResults) {
       setMovies(parsedData.results.slice(0, moviesPerRequest));
    // } else {
    //    setMovies(movies.concat(parsedData.results.slice(0, moviesPerRequest)));
    //  }
      // Update other states
      setTotalResults(parsedData.total_results);
      setProgress(100);
      setYear(2012+1)
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  

  useEffect(() => {
    updateMovies();
    // eslint-disable-next-line
  }, [location,searchResults,genres]); // Trigger updateMovies when genres change

  const fetchMoreData = async () => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&primary_release_year=${year}&page=${page}&vote_count.gte=100&with_genres=${genres}`;
    if (searchTerm.trim() !== "") {
      // If search results are present, update URL for search query
      url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;
    }
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setMovies(movies.concat(parsedData.results.slice(0, moviesPerRequest)));
      setTotalResults(parsedData.total_results);  
      setYear(year + 1)
    } catch (error) {
      console.error('Error fetching more movies:', error);
    }
  };

  const handleSearch = (results, term) => {
    setSearchResults(results);
    setSearchTerm(term);
  };

  return (
    <div className="container ">
      <Search apiKey={apiKey} onSearch={handleSearch} />
      {movies.length === 0 ? (
        <NoMovieResults />
      ) : (
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
      )}
    </div>
  );
}

export default Movies;
