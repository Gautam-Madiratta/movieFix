import React from "react";
import "../Css/MovieItem.css"

const MovieItem = ({ title, description, imageUrl, source, genres, date , cast , director, runtime,vote_average }) => {
  // const limitDescription = (description, limit = 25) => {
  //   const words = description.split(" ");
  //   if (words.length > limit) {
  //     return words.slice(0, limit).join(" ") + "...";
  //   }
  //   return description;
  // };

  let vote = vote_average.toFixed(1)

  return (
    <div className="card my-2 h-99"> 
      <img src={imageUrl} className="card-img-top" alt="..." /> 
      <div className="card-body d-flex flex-column bg-dark">
        <span className="badge rounded-pill text-bg-danger mb-4">{source}</span>
        <h6 className="card-title text-light mx-2">{title}</h6>
        <div className="d-flex flex-row">
        <div className=" mx-2 text-success">{vote}</div>
        <div className=" mx-2 text-light">{date}</div>
        <div className=" mx-2 text-light">{runtime}m</div>
        </div>
        <div className="card-text text-light">
          <div className="card-description ">{description}</div>  
        </div>
        <div className="card-text">
          <span className="more-details d-flex flex-column">
            <div className="text-secondary">Genres: {genres} </div>
            <div className="text-secondary">Cast: {cast.join(', ')} </div> 
            <div className="text-secondary">Director: {director} </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
