export interface FilmDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  isShow: boolean;
}
export interface Rating {
  Source: string;
  Value: string;
}
export interface FilmLists {
  list: Array<FilmDetails>;
}
export interface ListElement {
  film: FilmDetails;
  key: number;
}
