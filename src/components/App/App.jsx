import React from 'react';
import logo from '../../images/logo.png';
import Movietitle from '../Moviedetails/Movietitle';

class App extends React.Component {
  isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      listofmovies: [],
      searchkeyword: '',
    };
  }

  componentDidMount() {
    this.isMounted = true;
    this.getmovieslist();
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  searchmovielist=(e) => {
    this.setState({
      searchkeyword: e.target.value,
    });

    if (e.key === 'Enter') this.getmovieslist();
  }

  getmovieslist=() => {
    const { searchkeyword } = this.state;
    window.fetch(`http://www.omdbapi.com/?s=${searchkeyword}&apikey=7da3fb5d`)
      .then(resultdata => resultdata.json())
      .then((resultdata) => {
        if (this.isMounted) {
          if (resultdata.Search && resultdata.Search.length) {
            const listofmovies = resultdata.Search.map(item => item.imdbID);
            this.setState({ listofmovies });
          }
        }
      });
  }

  render() {
    const { listofmovies } = this.state;
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">
            <img src={logo} alt="app-logo" />
          </h1>
        </header>
        <div className="search-box">
          <input type="text" placeholder="Enter Movies name" onKeyUp={this.searchmovielist} />
          <button type="button" className="search-icon" onClick={this.getmovieslist}><i className="fa fa-search" /></button>
        </div>
        <div className="movie-listdetails">
          {listofmovies.map(movie => (
            <Movietitle imdbID={movie} key={movie} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
