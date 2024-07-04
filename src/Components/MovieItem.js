import React from "react";

const MovieItem = ({ title, description, imageUrl, source, genres, date , cast , director, runtime,vote_average }) => {
  const limitDescription = (description, limit = 25) => {
    const words = description.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return description;
  };

  let vote = vote_average.toFixed(1)

  return (
    <div className="card my-2 h-99"> {/* Add h-100 class for equal height */}
      <img src={imageUrl} className="card-img-top" alt="..." style={{ height: "342px", objectFit: "fill" }} /> {/* Adjust height to maintain aspect ratio */}
      <div className="card-body d-flex flex-column bg-dark"> {/* Use flexbox to ensure equal height */}
        <span className="badge rounded-pill text-bg-danger mb-4">{source}</span>
        <h5 className="card-title text-light mx-2">{title}</h5>
        <div className="d-flex flex-row">
        <div className=" mx-2 text-success" style={{"fontWeight":"bold"}}>{vote}</div>
        <div className=" mx-2 text-light">{date}</div>
        <div className=" mx-2 text-light">{runtime}m</div>
        </div>
        <p className="card-text text-light">{limitDescription(description)}</p> {/* Use flex-grow-1 for description to fill remaining space */}
        <p className="card-text">
          <span className="d-flex flex-column" style={{"fontSize":"12px"}} >
            <div className="text-secondary">Genres: {genres} </div>
            <div className="text-secondary">Cast: {cast.join(', ')} </div> 
            <div className="text-secondary">Director: {director} </div>
          </span>
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
