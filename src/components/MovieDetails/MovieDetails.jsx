import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.scss';

class MovieDetail extends Component {
  isMounted = false;

  constructor(props) {
    super(props);
    this.url = 'https://www.omdbapi.com/?apikey=66da8a17';
    this.state = {
      movieData: null,
    };
  }

  componentDidMount() {
    this.isMounted = true;
    this.getMovieDetails();
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  getMovieDetails = () => {
    const { movieSelected } = this.props;
    const url = `${this.url}&i=${movieSelected}`;
    window.fetch(url)
      .then(res => res.json())
      .then((movieData) => {
        if (this.isMounted) this.setState({ movieData });
      });
  }

  renderMovieDetailColumn = (title, data) => (
    <div className="column">
      <h4>{`${title}:`}</h4>
      <span>{data}</span>
    </div>
  );

  render() {
    const { closeMovieDetails } = this.props;
    const { movieData } = this.state;

    if (!movieData) return null;

    return (
      <div className="MoviePopUp">
        <div className="MoviePopUpContent">
          <span
            role="presentation"
            className="close"
            onClick={closeMovieDetails}
          >
            &times;
          </span>
          <section className="movieDetailsContainer">
            <div className="leftWrap">
              <img src={movieData.Poster} alt={movieData.Title} />
            </div>
            <div className="rightWrap">
              <h2>{movieData.Title}</h2>
              <p align="justify">{movieData.Plot}</p>
              {this.renderMovieDetailColumn('Cast', movieData.Actors)}
              {this.renderMovieDetailColumn('Director', movieData.Director)}
              {this.renderMovieDetailColumn('Production', movieData.Production)}
              {this.renderMovieDetailColumn('Genre', movieData.Genre)}
              {this.renderMovieDetailColumn('Released on', movieData.Released)}
              {this.renderMovieDetailColumn('Duration', movieData.Runtime)}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

MovieDetail.propTypes = {
  closeMovieDetails: PropTypes.func.isRequired,
  movieSelected: PropTypes.string.isRequired,
};

export default MovieDetail;
