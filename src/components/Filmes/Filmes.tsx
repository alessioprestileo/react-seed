import React, { Component } from 'react';
import FilmItem from './FilmItem';
import './Filmes.scss';

class Filmes extends Component {
  isMounted = false;

  constructor(props) {
    super(props);
    this.state = { filmesList: []};
  }

  componentDidMount() {
    this.isMounted = true;
    this.getFilmList();
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  getFilmList = () => {
    const url = `https://www.omdbapi.com/?apikey=7aa2c08d&s=one`;

    window.fetch(url)
      .then(res => res.json())
      .then((res) => {
        if (res.Search && res.Search.length) {
          const filmesList = res.Search.map(film => film.imdbID);
          if (this.isMounted) this.setState({ filmesList });
        }
      });
  }

  render() {
    const { filmesList } = this.state;

    return (
      <div>
          {filmesList.map(film => (
          <FilmItem filmID={film} key={film} />
        ))}
      </div>
    );
  }
}

export default Filmes;
