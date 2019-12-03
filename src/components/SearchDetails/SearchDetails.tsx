import React from 'react';
import axios from 'axios';
import './SearchDetails.scss';
import ClipLoader from 'react-spinners/ClipLoader';

const apiKey = '4c460b36';

type MyProps = { match: any };
type MyState = { detailsApi: any };

class SearchDetails extends React.Component<MyProps, MyState> {

  constructor(props: MyProps) {
    super(props);
    this.state = { detailsApi: { data: '', loading: true, error: '' } };
  }

  componentDidMount() {
    this.getAllDetails(this.props.match.params.id);
  }

  getAllDetails(id: string) {
    axios.get('http://www.omdbapi.com/?apikey=' + apiKey + '&i=' + id).then(response => {
      this.setState({ detailsApi: { data: response, loading: false } });
      console.log(response);
    }).catch(error => {
      this.setState({ detailsApi: { error } });
      console.log(error);
    });
  }

  render() {

    if (this.state.detailsApi.data == '') {
      return (
                <div className="details-wrapper">
                    <div className="loader">
                        <ClipLoader
                            sizeUnit={'px'}
                            size={150}
                            color={'#dcdcdc'}
                            loading={this.state.detailsApi.loading}
                        />
                    </div>
                </div>

      );
    }

    if (this.state.detailsApi.error) {
      return (
                <div className="error">
                    Something Went Wrong!
                </div>
      );
    }

    if (this.state.detailsApi.data.data.Response == 'True') {
      return (

                <div className="details-wrapper">

                    <div className="container">

                        <div className="left-container">
                            <div className="image">
                                <img src={this.state.detailsApi.data.data.Poster} />
                            </div>
                        </div>
                        <div className="right-container">
                            <div className="details">
                                <h2>Title: {this.state.detailsApi.data.data.Title}</h2>
                                <h3>Year: {this.state.detailsApi.data.data.Year}</h3>
                                <h3>IMDB Rating: {this.state.detailsApi.data.data.imdbRating}</h3>
                                <p>Director: {this.state.detailsApi.data.data.Director}</p>
                                <p>Genre: {this.state.detailsApi.data.data.Genre}</p>
                                <p>Runtime: {this.state.detailsApi.data.data.Runtime}</p>
                                <p>Production: {this.state.detailsApi.data.data.Production}</p>
                                <p>Rated: {this.state.detailsApi.data.data.Rated}</p>
                                <p>IMDB Voting: {this.state.detailsApi.data.data.imdbVotes}</p>
                                <p>Writer: {this.state.detailsApi.data.data.Writer}</p>

                            </div>
                        </div>
                    </div>
                </div>
      );
    }
    return (
                <div className="no-result">
                    No results found!
                </div>
    );

  }

}

export default SearchDetails;
