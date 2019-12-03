import React from 'react';
import SearchItem from '../SearchItem/SearchItem';
import axios from 'axios';
import './SearchBlock.scss';
import ClipLoader from 'react-spinners/ClipLoader';
import Pagination from 'react-js-pagination';

const apiKey = '4c460b36';

type MyState = { searchValue: string,
  api: any,
  activePage: number };

class SearchBlock extends React.Component<{}, MyState> {

  constructor(props: {}) {
    super(props);
    this.state = { searchValue:'',
      api: { data:'', loading: false, error: false },
      activePage: 1,
    };
    this.getSearchList = this.getSearchList.bind(this);
  }

  getSearchList(page?: number) {

    this.setState({ api: { loading: true } });
    let uri = '';

    if (page) {
      uri = 'http://www.omdbapi.com/?apikey=' + apiKey + '&s=' + this.state.searchValue + '&page=' + page;
    } else {
      uri = 'http://www.omdbapi.com/?apikey=' + apiKey + '&s=' + this.state.searchValue;
    }

    axios.get(uri).then((response) => {
      this.setState({ api: { data: response.data, loading: false } });
      console.log(response);
    }).catch((error) => {
      this.setState({ api: { error: true } });
      console.log(error);
    });

  }

  handleSubmit(event: any) {
    console.log(this.state.searchValue);
    event.preventDefault();
    this.getSearchList();
  }

  handleOnChange(event: any) {
    this.setState({ searchValue: event.target.value });
  }

  handlePageChange(pageNumber: number) {
    this.setState({ api: { loading: true }, activePage: pageNumber });
    this.getSearchList(pageNumber);
  }

  render() {

    const searchBox =
      <div className="search-block">
          <form onSubmit={this.handleSubmit.bind(this)}>
              <label>
                  Search:
                  <input type="text" onChange={this.handleOnChange.bind(this)}/>
              </label>
              <input type="submit" value="submit"/>
          </form>
      </div>;

    if (!this.state.api.data) {

      return (
        <div className="search-container">
          {searchBox}
          {!this.state.api.loading ?
            <div className="empty-error">
              <div>Search your Movies</div>
            </div> : null
          }
          <div className="loader">
            <ClipLoader
              sizeUnit={'px'}
              size={150}
              color={'#dcdcdc'}
              loading={this.state.api.loading}
            />
          </div>
        </div>
      );
    }
    // console.log(this.state.api.data.totle.length);

    if (this.state.api.data.Response == 'True') {
      return(
        <div className="search-container">
          {searchBox}
          <div className="search-result">
            {this.state.api.data.Search.map((item: any) => {
              return <SearchItem item={item} key={item.imdbID}/>;
            })}
          </div>

          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={10}
            totalItemsCount={this.state.api.data.totalResults}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange.bind(this)}
           />
        </div>
      );
    }
    return (
        <div className="search-container">
          {searchBox}
          <div className="empty-error">
                  <div>{this.state.api.data.Error}</div>
          </div>
        </div>
    );

  }
}

export default SearchBlock;
