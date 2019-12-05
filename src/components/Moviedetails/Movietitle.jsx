/* eslint react/prop-types: 0 */
import React from 'react';

class Movietitle extends React.Component {
    isMounted = false;

    constructor(props) {
      super(props);
      this.state = {
        show: false,
        movielist: [],
      };
    }

    componentDidMount() {
      this.isMounted = true;
      this.getmovieslist();
    }

    componentWillUnmount() {
      this.isMounted = false;
    }

      getmovieslist=() => {
        const { imdbID } = this.props;// eslint-disable-line import/no-extraneous-dependencies
        window.fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=7da3fb5d`)
          .then(resultdata => resultdata.json())
          .then((resultdata) => {
            if (this.isMounted) {
              this.setState({ movielist: resultdata });
            }
          });
      }

      showModal=() => {
        this.setState({ show: true });
      }

      hideModal=() => {
        this.setState({ show: false });
      }

      render() {
        const { movielist, show } = this.state;
        const showhidemodal = show ? 'modal-show' : 'modal-hide';
        const {
          Title, Poster, Released, imdbRating, Plot,
          Actors, Genre, Runtime, Director, Production, Year,
        } = movielist;
        return (
          <div className="movielist">
            <ul>
              <li><img src={Poster} alt="movie-poster" /></li>
              <li className="title">{Title}</li>
              <li className="year">{Year}</li>
            </ul>
            <div className={showhidemodal}>
              <div className="poster"><img src={Poster} alt="movie-poster" /></div>
              <ul>
                <li className="title">{Title}</li>
                <li className="date">{Released}</li>
                <li className="time">{Runtime}</li>
                <li className="rating">
                  <span>IMDb Rating: </span>
                  {imdbRating}
                </li>
                <li className="plot">
                  <span>Synopsis:</span>
                  {Plot}
                </li>
                <li className="actors">
                  <span>Cast:</span>
                  {Actors}
                </li>
                <li className="genre">
                  <span>Genre:</span>
                  {Genre}
                </li>
                <li className="director">
                  <span>Director:</span>
                  {Director}
                </li>
                <li className="production">
                  <span>Production:</span>
                  {Production}
                </li>
              </ul>
              <button type="button" className="close-icon" onClick={this.hideModal}><i className="fa fa-close" /></button>
            </div>
            <button type="button" onClick={this.showModal}>view details</button>

          </div>
        );
      }
}

export default Movietitle;
