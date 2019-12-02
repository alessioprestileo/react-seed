import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { MoviesActionTypes, Movie } from '../types/movieTypes';
import { request, success, failuer } from './baseActions';
import * as moviesService from '../services/services';

export const setSelectedMovie = (movie: Movie) => {
  return {
    type: MoviesActionTypes.SET_SELECTED_MOVIE,
    movie,
  };
};

export const fetchLatestMovies = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(request(MoviesActionTypes.FETCH_MOVIES_REQUEST));
    return moviesService.fetchLatestMovies().then((movies: any) => {
      dispatch(success(MoviesActionTypes.FETCH_MOVIES_SUCCESS, movies));
    },                                            (error: any) => {
      dispatch(failuer(MoviesActionTypes.FETCH_MOVIES_FAILURE, error));
    });
  };
};

export const searchMovies = (query: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(request(MoviesActionTypes.SEARCH_MOVIES_REQUEST));
    return moviesService.searchMovies(query).then((movies: any) => {
      dispatch(success(MoviesActionTypes.SEARCH_MOVIES_SUCCESS, movies));
    },                                            (error: any) => {
      dispatch(failuer(MoviesActionTypes.SEARCH_MOVIES_FAILURE, error));
    });
  };
};

export const fetchMovieById = (id: number): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(request(MoviesActionTypes.FETCH_MOVIE_REQUEST));
    return moviesService.fetchMovieById(id).then((movies: any) => {
      dispatch(success(MoviesActionTypes.FETCH_MOVIE_SUCCESS, movies));
    },                                           (error: any) => {
      dispatch(failuer(MoviesActionTypes.FETCH_MOVIE_FAILURE, error));
    });
  };
};
