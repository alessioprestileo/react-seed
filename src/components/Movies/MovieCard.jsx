/* eslint-disable linebreak-style */
import React, { Component } from 'react';

const imdbApiKey = 'b106e298';

class MovieCard extends Component {
  isMounted = false;

  constructor(props) {
    super(props);
    this.state = { movieData: {} };
  }

  componentDidMount() {
    this.isMounted = true;
    this.getMovieDetail();
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  getMovieDetail = () => {
    const { movieID } = this.props;
    const url = `https://www.omdbapi.com/?apikey=${imdbApiKey}&i=${movieID}`;

    window.fetch(url)
      .then(res => res.json())
      .then((movieData) => {
        if (this.isMounted) this.setState({ movieData });
      });
  }

  selectMovie = (event) => {
    if (!event.currentTarget.classList.contains('selected')) {
      document.querySelectorAll('.listItem').forEach(e => e.classList.remove('selected'));
      event.currentTarget.classList.add('selected');
    } else {
      event.currentTarget.classList.remove('selected');
    }
  }

  render() {
    const { movieData } = this.state;
    const { movieID } = this.props;
    const {
      Title, Poster, Released, imdbRating, Plot, Actors, Genre, Runtime, Director, Production, Year,
    } = movieData;

    if (!Title) return null;

    return (
      <div className="listItem" onClick={this.selectMovie} data-idx={movieID}>
        <div className="leftWrap">
          <img alt={Title} src={Poster} />
        </div>
        <div className="rightWrap">
          <h3>{Title}</h3>
          <h4 className="year">
            {Year}
          </h4>
          <h4 className="movDir">
            <small>Directed by </small>
            {Director}
          </h4>
          {Production && (
            <h4 className="movWriter">
              <small>Produced by </small>
              {Production}
            </h4>
          )}
          <h4 className="movWriter">
            <small>Actors </small>
            {Actors}
          </h4>
          <p className="movDesc">
            <small className="spaces">
              <span className="bottomline">About movie</span>
            </small>
            {Plot}
          </p>
          <div className="moreDetails">
            <p className="movYear">
              <span>
                <small>Released on</small>
                {Released}
              </span>
            </p>
            <p className="runningTime">
              <small>Total running time</small>
              <strong>{Runtime}</strong>
            </p>
            <p className="movRating">
              <span>
                <small>OMDb Rating</small>
                {imdbRating}
                <sup>/ 10</sup>
              </span>
            </p>
          </div>
          <p className="movGenre">
            <small className="gap">Genre</small>
            { Genre.split(',')
              .map((genre) => {
                return (<span className="label">{genre}</span>);
              })
            }
          </p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
