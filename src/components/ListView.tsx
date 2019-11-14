import React from 'react';
import { Link } from 'react-router-dom';

export const getListView = (movie:any) => {
  return (
    <div className="movieListContainer">
      {movie.length
        ? movie.map((movie : any, index:number) => {
          return (
              <Link key={index}
                style={{ textDecoration: 'none' }}
                to={`/movie/${movie.imdbID}`}
              >
                <div className="movieListWrapper">
                  <img
                    alt="movie banner"
                    className="poster"
                    src={movie.Poster}
                  />
                  <div className="movieInfo">{movie.Title}</div>
                  <div className="movieInfo">{movie.Year}</div>
                </div>
              </Link>
            );
        })
        : ''}
    </div>
  );
};
