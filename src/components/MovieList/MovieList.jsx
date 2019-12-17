import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import MovieDetails from '../MovieDetails/MovieDetails';
import './MoviesList.scss';

class MovieList extends Component {
  isMounted = false;

  constructor(props) {
    super(props);
    this.url = 'https://www.omdbapi.com/?apikey=66da8a17';
    this.state = {
      movieList: [],
      movieSelected: null,
      isMovieDetailsVisible: false,
    };
  }

  componentDidMount() {
    this.isMounted = true;
    this.getMovieList();
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  getMovieList = () => {
    const url = `${this.url}&s=harry`;
    window.fetch(url)
      .then(response => response.json())
      .then((response) => {
        if (response.Search && response.Search.length) {
          this.isMounted && this.setState({ movieList: response.Search });
        }
      });
  }

  selectMovie = ({ target }) => {
    this.setState({ movieSelected: target.id, isMovieDetailsVisible: true });
  }

  closeMovieDetails = () => this.setState({ isMovieDetailsVisible: false })

  render() {
    const { movieList, movieSelected, isMovieDetailsVisible } = this.state;
    return (
      <div className="movieListContanier">
        {isMovieDetailsVisible && (
          <MovieDetails
            url={this.url}
            movieSelected={movieSelected}
            closeMovieDetails={this.closeMovieDetails}
          />
        )}
        {movieList.map(movie => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            selectMovie={this.selectMovie}
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
