import { Reducer } from 'redux';
import { MoviesState, MoviesActionTypes, Movie } from './types';

export const initialState: MoviesState = {
  movies: [],
  error: undefined,
  selectedMovie: new Movie(),
  isFetchingMovies: false,
  isFetchingMovie: false,
};

export const moviesReducer: Reducer<MoviesState> = (state = initialState, action) => {
  switch (action.type) {
    case MoviesActionTypes.FETCH_MOVIES_REQUEST:
      return {
        ...state,
        isFetchingMovies: true,
      };
    case MoviesActionTypes.FETCH_MOVIES_SUCCESS:
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        isFetchingMovies: false,
        movies: [...action.payload.results],
      };
    case MoviesActionTypes.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        isFetchingMovies: false,
        error: action.error,
      };
    case MoviesActionTypes.SET_SELECTED_MOVIE:
      if (!action.movie) {
        return state;
      }
      return {
        ...state,
        selectedMovie: { ...action.movie },
      };
    case MoviesActionTypes.FETCH_MOVIE_REQUEST:
      return {
        ...state,
        isFetchingMovie: true,
      };
    case MoviesActionTypes.FETCH_MOVIE_SUCCESS:
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        isFetchingMovie: false,
        selectedMovie: { ...action.payload },
      };
    case MoviesActionTypes.FETCH_MOVIE_FAILURE:
      return {
        ...state,
        isFetchingMovie: false,
        error: action.error,
      };
    default:
      return state;
  }
};
