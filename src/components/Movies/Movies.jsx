/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import MovieCard from './MovieCard';
import './Movies.scss';

const imdbApiKey = 'b106e298';

class MoviesList extends Component {
  isMounted = false;

  constructor(props) {
    super(props);
    this.state = { moviesList: [], searchTerm: 'india' };
  }

  componentDidMount() {
    this.isMounted = true;
    this.getMovieList();
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  updateSearch = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
    if (event.key === 'Enter') this.getMovieList();
  };

  getMovieList = () => {
    const { searchTerm } = this.state;
    const url = `https://www.omdbapi.com/?apikey=${imdbApiKey}&s=${searchTerm}`;

    window.fetch(url)
      .then(res => res.json())
      .then((res) => {
        if (res.Search && res.Search.length) {
          const moviesList = res.Search.map(movie => movie.imdbID);
          if (this.isMounted) this.setState({ moviesList });
        }
      });
  }

  render() {
    const { moviesList } = this.state;

    return (
      <div>
        <div id="searchWrapper">
          <input placeholder="Search movies..." onKeyUp={this.updateSearch} />
          <button type="submit" onClick={this.getMovieList}>Search</button>
        </div>
        {moviesList.map(movie => (
          <MovieCard movieID={movie} key={movie} />
        ))}
      </div>
    );
  }
}

export default MoviesList;
