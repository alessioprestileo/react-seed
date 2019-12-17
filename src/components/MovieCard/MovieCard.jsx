import React from 'react';
import PropTypes from 'prop-types';
import './MoviesCard.scss';

const MovieCard = ({ movie, selectMovie }) => (
  <div className="movieCardContainer">
    <div role="presentation" className="movieImage" onClick={selectMovie}>
      <img id={movie.imdbID} src={movie.Poster} alt={movie.Title} />
    </div>
  </div>
);

MovieCard.propTypes = {
  movie: PropTypes.oneOfType([PropTypes.object]).isRequired,
  selectMovie: PropTypes.func.isRequired,
};

export default MovieCard;
