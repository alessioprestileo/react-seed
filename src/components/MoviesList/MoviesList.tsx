import React, { FC } from 'react';
import { Movie } from '../../store/movie/types';
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
          return (
            <GridListTile key={`${movie.id}`}
              className={classes.listItem}
              onClick={() => onItemClick && onItemClick(movie)}>
              <img src={`${appConstants.imageURL}${movie.posterPath}`} alt={movie.title} />
              <GridListTileBar title={movie.title} />
            </GridListTile>
          );
        })
      }
    </GridList>
  );
};

export default withStyles(MoviesListStyle)(MoviesList);
