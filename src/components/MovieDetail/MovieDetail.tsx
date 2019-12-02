import React, { FC, forwardRef } from 'react';
import {
    withStyles, Dialog, DialogTitle, DialogContent, Grid, Typography,
    IconButton, Slide, Table, TableBody, TableRow, TableCell, CircularProgress,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { TransitionProps } from '@material-ui/core/transitions';
import { Movie } from '../../types/movieTypes';
import MovieDetailStyle from './MovieDetailStyle';
import { appConstants } from '../../helpers/appConstants';

interface MovieDetailProps {
  movie: Movie;
  open: boolean;
  isLoading: boolean;
  onClose: any;
  classes: any;
}

const Transition = forwardRef<unknown, TransitionProps>((props, ref) =>
    <Slide direction="up" ref={ref} {...props} />,
);

const MovieDetail: FC<MovieDetailProps> = (props) => {
  const { open, movie, classes, isLoading, onClose } = props;
  const backdropURL = movie.backdrop_path
        ? `${appConstants.backdropURL}${movie.backdrop_path}`
        : require('../../react-assets/no_image_available.png');
  return (
        <Dialog open={open}
            TransitionComponent={Transition}
            className={classes.queryFilterDialog}
            onEnter={() => { }}
            onClose={() => onClose && onClose()}>
            <DialogTitle className={classes.titleContainer}>
                <img src={backdropURL}
                    alt={`backdrop_${movie.title}`} />
                <Grid container justify="space-between"
                    alignItems="center"
                    className={classes.titleBar}>
                    <Grid item>
                        <Typography variant="h6" className={classes.title}>
                            {movie.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton className={classes.btnClose}
                            onClick={() => onClose()}><Close /></IconButton>
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent>
                <Grid container style={{ position: 'relative' }}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="overline">
                                        Overview</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="overline">
                                        {movie.overview}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            {
                                movie.genres && movie.genres.length > 0 &&
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="overline">
                                            Genres
                                            </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="overline">
                                            {movie.genres.map(p => p.name).join(', ')}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            }
                            <TableRow>
                                <TableCell>
                                    <Typography variant="overline">
                                        User Score
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="overline">
                                        {movie.vote_average > 0 ? movie.vote_average : 0}/10
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    {
                        isLoading &&
                        <Grid container justify="center"
                            alignItems="center"
                            className={classes.loader}>
                            <CircularProgress color="primary" />
                        </Grid>
                    }
                </Grid>
            </DialogContent>
        </Dialog>);
};

export default withStyles(MovieDetailStyle)(MovieDetail);
