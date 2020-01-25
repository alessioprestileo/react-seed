import React, { Component } from 'react';

class FilmItem extends Component {
  isMounted = false;

  constructor(props) {
    super(props);
    this.state = {filmData: {},isSelected: false };
    this.detailsRef = React.createRef();
  }

  componentDidMount() {
    this.isMounted = true;
    this.getFilmDetail();
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  getFilmDetail = () => {
    const { filmID } = this.props;
    const url = `https://www.omdbapi.com/?apikey=7aa2c08d&i=${filmID}`;

    window.fetch(url)
      .then(res => res.json())
      .then((filmData) => {
        if (this.isMounted) this.setState({ filmData });
      });
  }

  selectFilm = (e) => {

      if(this.detailsRef.current.style.display!='block')
        this.detailsRef.current.style.display = 'block'
      else
        this.detailsRef.current.style.display = 'none'
  }

  render() {
    const { filmData } = this.state;
    const { filmID } = this.props;
    const {
      Title, Poster, Released, imdbRating, Plot, Actors, Genre, Runtime, Director, Production, Year,
    } = filmData;

    if (!Title) return null;

    return (
      <div className="film" onClick={((e) => this.selectFilm(e))}>
          <div className="floatleft">
            <img alt={Title} src={Poster} />
          </div>
          <div className="floaright">
            <h3>{Title}</h3>
            <b>Year</b> : {Year}<br /><br />
            <b>Director</b> : {Director}<br />
            <b>Production</b> : {Production}<br /><br />
            <b>Actor</b> : {Actors}<br /><br />
            <div className="details" ref={this.detailsRef}>
              <b>More Details</b><br />
              <b>Released</b> : {Released}<br />
              <b>Runtime</b> : {Runtime}<br />
              <b>Rating</b> : {imdbRating}<br />
              <b>Category</b> : 
                  {Genre.split(',')
                   .map((genre) => {
                      return (<span className="tag" key={genre}>{genre}</span>);
                   })}<br />
              <b>Story</b> : {Plot}
            </div>
          </div>
        </div>
    );
  }
}

export default FilmItem;
