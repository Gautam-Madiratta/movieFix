import React from "react";
import { Link, useLocation } from "react-router-dom";

// export default class Navbar extends Component
export default function Navbar(props) {
  // render() {
  const location = useLocation();

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-2">
        <div className="container-fluid flex-row">
          {/*eslint-disable-next-line */}
          <a
            className="navbar-brand text-danger"
            to="/"
            style={{
              fontWeight: "bold",
              fontSize: "35px",
              fontFamily: "sans-serif",
            }}
          >
            MovieFix
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
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
                  className={`nav-link ${
                    location.pathname === "/all" ||  location.pathname === "/"
                      ? "active bg-danger text-light rounded-2"
                      : ""
                  }`}
                  aria-current="page"
                  to="/all"
                >
                  All
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/action"
                      ? "active bg-danger text-light rounded-2"
                      : ""
                  }`}
                  to="/action"
                >
                  Action
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/comedy"
                      ? "active bg-danger text-light rounded-2"
                      : ""
                  }`}
                  to="/comedy"
                >
                  Comedy
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/horror"
                      ? "active bg-danger text-light rounded-2"
                      : ""
                  }`}
                  to="/horror"
                >
                  Horror
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/drama"
                      ? "active bg-danger text-light rounded-2"
                      : ""
                  }`}
                  to="/drama"
                >
                  Drama
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/sci-fi"
                      ? "active bg-danger text-light rounded-2"
                      : ""
                  }`}
                  to="/sci-fi"
                >
                  Sci-Fi
                </Link>
              </li>
              <li className="nav-item"></li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
  // }
}
