import { combineReducers } from 'redux';
import { moviesReducer } from './movie/reducer';
import { MoviesState } from './movie/types';

export interface AppState {
  movies: MoviesState;
}

export const createRootReducer = () => combineReducers({
  movies: moviesReducer,
});
