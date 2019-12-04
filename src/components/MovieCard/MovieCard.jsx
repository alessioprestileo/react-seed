import React from 'react';
import './MoviesCard.scss';

const MovieCard = ({ movie, selectMovie }) => (
  <div className="movieCardContainer">
    <div role="presentation" className="movieImage" onClick={selectMovie}>
      <img id={movie.imdbID} src={movie.Poster} alt={movie.Title} />
    </div>
  </div>
);

export default MovieCard;
