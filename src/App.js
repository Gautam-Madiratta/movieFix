import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Movies from './Components/Movies';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

export default function App() {
  const apiKey = process.env.REACT_APP_Movie_API;
  const [progress, setProgress] = useState(0);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreSelect = (genres) => {
    setSelectedGenres(genres);
  };

  return (
    <div className="bg-dark">
      <Router>
        <Navbar apiKey={apiKey} onGenreSelect={handleGenreSelect} selectedGenres={selectedGenres} />
        <LoadingBar color="#f11946" progress={progress} />

        <Routes>
          {/* <Route
            path="/all"
            element={<Movies setProgress={setProgress} apiKey={apiKey} genres={selectedGenres.join(',')}/>}
          /> */}
           <Route
            path="/"
            element={<Movies setProgress={setProgress} apiKey={apiKey} genres={selectedGenres.join(',')} />}
          />
           <Route
            path="/search"
            element={<Movies search={true}setProgress={setProgress} apiKey={apiKey}  />}
          />
        </Routes>
      </Router>
    </div>
  );
}
