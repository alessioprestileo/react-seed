class Genres {
  id: number = 0;
  name: string = '';
}

export class Movie {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  release_date: string;
  backdrop_path: string;
  poster_path: string;
  adult: boolean;
  genres: Genres[];
  vote_average: number;

  constructor() {
    this.id = 0;
    this.title = '';
    this.overview = '';
    this.popularity = 0;
    this.release_date = '';
    this.backdrop_path = '';
    this.poster_path = '';
    this.adult = false;
    this.genres = [];
    this.vote_average = 0;
  }
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
