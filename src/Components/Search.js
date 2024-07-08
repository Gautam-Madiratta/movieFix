import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import "../Css/Search.css"

const Search = ({ apiKey, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Clear search term when location pathname changes from /search
    if (location.pathname !== "/search") {
      setSearchTerm(""); // Reset the searchTerm state
    }
  }, [location.pathname]); // Dependency array ensures effect runs when location.pathname changes

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(searchTerm)}`;
        const response = await fetch(url);
        const data = await response.json();
        navigate("/search");
        onSearch(data.results, searchTerm); // Pass the search results and search term to the parent component
      } catch (error) {
        console.error("Error searching movies:", error);
      }
    }
  };

  return (
    <form className="search-form d-flex fixed-top ms-auto" onSubmit={handleSearchSubmit}>
      <input
        className="form-control me-2 ms-auto"
        type="search"
        placeholder="Search movies..."
        aria-label="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button className="btn btn-outline-secondary" type="submit">
        Search
      </button>
    </form>
  );
};

Search.propTypes = {
  apiKey: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Search;
