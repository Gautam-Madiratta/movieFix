// Search.js
import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ apiKey, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

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
        onSearch(data.results, searchTerm); // Pass the search results and search term to the parent component
       
      } catch (error) {
        console.error("Error searching movies:", error);
      }
    }
  };

  return (
    <form className="d-flex fixed-top ms-auto" onSubmit={handleSearchSubmit} style={{"marginTop": "15px","width": "260px"}}>
      <input
        className="form-control me-2 ms-auto"
        type="search"
        placeholder="Search movies..."
        aria-label="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{"width": "170px"}}
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
