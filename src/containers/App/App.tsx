import React, { Fragment, Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { MuiThemeProvider, CssBaseline, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import appTheme from '../../styles/mainTheme';
import { AppState } from '../../reducers';
import './App.scss';
import Movies from '../Movies/MoviesContainer';
import Header from '../../components/Header/Header';
import { fetchLatestMovies, searchMovies } from '../../actions/moviesActions';

interface StateProps {
  query: string;
}

interface DispatchProps {
  fetchLatestMovies: () => void;
  searchMovies: (query: string) => void;
}

class App extends Component<DispatchProps, StateProps> {
  constructor(props: DispatchProps) {
    super(props);
    this.state = {
      query: '',
    };
  }

  searchMovies(query: string) {
    if (!query) {
      this.props.fetchLatestMovies();
      return;
    }
    this.props.searchMovies(query);
  }

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={appTheme}>
          <Grid container>
            <Header searchQuery={this.state.query}
              onSearchQueryChange={(query: string) => this.searchMovies(query)}></Header>
            <Movies></Movies>
          </Grid>
        </MuiThemeProvider>
      </Fragment >
    );
  }
}

const mapStateToProps = ({ movies }: AppState) => {
  return {
    ...movies,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    fetchLatestMovies: async () => await dispatch(fetchLatestMovies()),
    searchMovies: async (query: string) => await dispatch(searchMovies(query)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(hot(App));
