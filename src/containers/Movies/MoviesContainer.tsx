import React, { Component } from 'react';
import { withStyles, Grid, CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppState } from '../../store';
import { fetchLatestMovies, setSelectedMovie, fetchMovieById } from '../../store/movie/actions';
import { Movie } from '../../store/movie/types';
import MoviesContainerStyle from './MoviesContainerStyle';
import MoviesList from '../../components/MoviesList/MoviesList';
import MovieDetail from '../../components/MovieDetail/MovieDetail';

interface StateProps {
  isFetchingMovies: boolean;
  isFetchingMovie: boolean;
  movies: Movie[];
  selectedMovie: Movie;
  errors?: string;
  classes: any;
}

interface DispatchProps {
  fetchLatestMovies: () => void;
  setSelectedMovie: (movie: Movie) => void;
  fetchMovieById: (id: number) => void;
}

interface MoviesListState {
  showMovieDetail: boolean;
}

type AllProps = StateProps & DispatchProps;

class Movies extends Component<AllProps, MoviesListState>{
  constructor(props: AllProps) {
    super(props);
    this.state = {
      showMovieDetail: false,
    };
  }

  componentDidMount() {
    this.props.fetchLatestMovies();
  }

  showMovieDetails(movie: Movie) {
    this.props.setSelectedMovie(movie);
    this.props.fetchMovieById(movie.id);
    this.setState({
      showMovieDetail: true,
    });
  }

  closeMovieDetailModal() {
    this.setState({
      showMovieDetail: false,
    });
  }

  render() {
    const { movies, classes } = this.props;
    return (
      <Grid container style={{ position: 'relative' }}>
        {
          movies && movies.length > 0 &&
          <MoviesList movies={movies}
            onItemClick={(movie: Movie) => this.showMovieDetails(movie)} />
        }
        {
          <MovieDetail movie={this.props.selectedMovie ? this.props.selectedMovie : new Movie()}
            open={this.state.showMovieDetail}
            onClose={() => this.closeMovieDetailModal()}
            isLoading={this.props.isFetchingMovie} />
        }
        {
          this.props.isFetchingMovies &&
          <Grid container justify="center" alignItems="center" className={classes.loader}>
            <CircularProgress color="primary" />
          </Grid>
        }

      </Grid>
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
    setSelectedMovie: (movie: Movie) => dispatch(setSelectedMovie(movie)),
    fetchMovieById: async (id: number) => await dispatch(fetchMovieById(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(withStyles(MoviesContainerStyle)(Movies));
