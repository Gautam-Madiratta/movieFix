import React from "react";
import "../Css/NoMoviesResult.css"

const NoMoviesResult = () => {
  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">No Results Found</div>
        <div className="card-body">
          <p className="card-text">
           No results found for selected filters , please try using another set of filters
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoMoviesResult;
