import React, { useState, useEffect } from 'react';
import MovieItem from "./MovieItem";

export default function MovieDetails(props) {
  const baseUrl =  "https://image.tmdb.org/t/p/w342";
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const details = async () => {
      const url = `https://api.themoviedb.org/3/movie/${props.element.id}?api_key=2dca580c2a14b55200e784d157207b4d&append_to_response=credits`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setMovieDetails(parsedData);
    }
    details();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { original_title, overview, poster_path} = props.element;
  const imageUrl = poster_path ? `${baseUrl}${poster_path}` : "https://img.icons8.com/?size=50&id=12452&format=png&color=000000";
  const { genres, credits, release_date  } = movieDetails;
  const cast = credits.cast.slice(0, 5).map(actor => actor.name);
  const director = credits.crew.find(member => member.job === "Director")?.name || "Unknown";
  const releaseYear = new Date(release_date).getFullYear();
  const runtime = movieDetails.runtime;
  const vote_average = movieDetails.vote_average;

  return (
    <div>
      <MovieItem
        title={original_title}
        description={overview}
        imageUrl={imageUrl}
        author={props.element.author}
        date={releaseYear}
        source={props.element.title}
        genres={genres.map(genre => genre.name).join(', ')}
        cast={cast}
        director={director}
        runtime={runtime}
        vote_average={vote_average}
      />
    </div>
  );
}
