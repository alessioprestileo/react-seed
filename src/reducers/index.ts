import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { MoviesState } from '../types/movieTypes';

export interface AppState {
  movies: MoviesState;
}

export const createRootReducer = () => combineReducers({
  movies: moviesReducer,
});
