import * as React from 'react';
import DisplayDetails from './DisplayDetails';

interface Props {
  details:object;
}

interface State{
  displayDetails:boolean;
}

export default class MovieList extends React.Component<Props, State> {
  static defaultProps: Props = {
    details:[],
  };

  state = {
    displayDetails : false,
  };

  displayMovieDetails = () => {
    this.setState({
      displayDetails: true,
    });
  }

  hideMovieDetails = () => {
    this.setState({
      displayDetails: false,
    });
  }

  render () {
    return <div><li onClick={this.displayMovieDetails}>{this.props.details.Title}</li>
    {this.state.displayDetails && <DisplayDetails movieDetails={this.props.details} 
    showModal={this.state.displayDetails} handleClose={this.hideMovieDetails}/>}</div>;
  }
}
