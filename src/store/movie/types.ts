class Genres {
  id: number = 0;
  name: string = '';
}

export class Movie {
  id: number = 0;
  title: string = '';
  overview: string = '';
  popularity: number = 0;
  releaseDate: string = '';
  backdropPath: string = '';
  posterPath: string = '';
  adult: boolean = false;
  genres: Genres[] = [];

}

export interface MoviesState {
  readonly movies: Movie[];
  readonly selectedMovie: Movie;
  readonly isFetchingMovies: boolean;
  readonly isFetchingMovie: boolean;
  readonly error?: string;
}

export enum MoviesActionTypes {
  FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST',
  FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE',
  SET_SELECTED_MOVIE = 'SET_SELECTED_MOVIE',

  SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST',
  SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS',
  SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE',

  FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST',
  FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS',
  FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE',
}
