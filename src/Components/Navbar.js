import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../Css/Navbar.css"


export default function Navbar({ onGenreSelect, selectedGenres }) {
  const location = useLocation();

  const handleGenreClick = (genre) => {
    // If genre is 'all', reset selectedGenres
    if (genre === 'all' ) {
      onGenreSelect([]);
    } else {
      const updatedGenres = selectedGenres.includes(genre)
        ? selectedGenres.filter((g) => g !== genre)
        : [...selectedGenres, genre];
      onGenreSelect(updatedGenres);
    }
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-2">
      <div className="container-fluid flex-row">
        <Link
          className="navbar-brand text-danger"
          to="/"
        >
          MovieFix
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${(location.pathname === '/') && selectedGenres.length === 0 ? 'active bg-danger text-light rounded-2' : ''}`}
                onClick={() => handleGenreClick('all')}
                to="/"
              >
                All
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${(location.pathname === '/') && selectedGenres.includes('28') ? 'active bg-danger text-light rounded-2' : ''}`}
                onClick={() => handleGenreClick('28')}
                to="/"
              >
                Action
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${(location.pathname === '/') &&  selectedGenres.includes('35') ? 'active bg-danger text-light rounded-2' : ''}`}
                onClick={() => handleGenreClick('35')}
                to="/"
              >
                Comedy
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${(location.pathname === '/') && selectedGenres.includes('27') ? 'active bg-danger text-light rounded-2' : ''}`}
                onClick={() => handleGenreClick('27')}
                to="/"
              >
                Horror
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${(location.pathname === '/') && selectedGenres.includes('18') ? 'active bg-danger text-light rounded-2' : ''}`}
                onClick={() => handleGenreClick('18')}
                to="/"
              >
                Drama
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${(location.pathname === '/') && selectedGenres.includes('878') ? 'active bg-danger text-light rounded-2' : ''}`}
                onClick={() => handleGenreClick('878')}
                to="/"
              >
                Sci-Fi
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
