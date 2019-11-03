import * as React from 'react';
import MovieList from './MovieList';

interface Props {}

interface State {
  details :object;
}

export default class Content extends React.Component<Props, State> {

  state: State = {
    details:[],
  };

  componentDidMount() {
    // fetch('http://jsonplaceholder.typicode.com/users')
    fetch('http://www.omdbapi.com/?t=avatar&apikey=7da3fb5d')
    .then(res => res.json())
    .then((data) => {
      this.setState({ details: data });
    })
    .catch(console.log);
  }

  render () {
    return (
      <div>
        <h1>Movie Name</h1>
          <MovieList details={this.state.details}></MovieList>
      </div>
    );
  }
}
