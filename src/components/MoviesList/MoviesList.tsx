import React, { FC } from 'react';
import { Movie } from '../../types/movieTypes';
import { withStyles, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import MoviesListStyle from './MoviesListStyle';
import { appConstants } from '../../helpers/appConstants';

interface MoviesListProps {
  classes: any;
  movies: Movie[];
  onItemClick: any;
}

const MoviesList: FC<MoviesListProps> = (props) => {
  const { classes, movies, onItemClick } = props;
  return (
    <GridList cellHeight={160} cols={4} className={classes.list}>
      {
        movies.map((movie) => {
          const posterURL = movie.poster_path
            ? `${appConstants.imageURL}${movie.poster_path}`
            : require('../../react-assets/no_image_available.png');
          return (
            <GridListTile key={`${movie.id}`}
              className={classes.listItem}
              onClick={() => onItemClick && onItemClick(movie)}>
              <img src={posterURL} alt={movie.title} />
              <GridListTileBar title={movie.title} />
            </GridListTile>
          );
        })
      }
    </GridList>
  );
};

export default withStyles(MoviesListStyle)(MoviesList);
