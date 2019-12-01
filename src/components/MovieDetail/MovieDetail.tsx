import React, { FC, forwardRef } from 'react';
import {
    withStyles, Dialog, DialogTitle, DialogContent, Grid, Typography,
    IconButton, Slide, Table, TableBody, TableRow, TableCell, CircularProgress,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { TransitionProps } from '@material-ui/core/transitions';
import { Movie } from '../../store/movie/types';
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
  return (
        <Dialog open={open} disableBackdropClick={true}
            disableEscapeKeyDown={true}
            TransitionComponent={Transition}
            className={classes.queryFilterDialog}
            onEnter={() => { }}
            onClose={() => onClose && onClose()}>
            <DialogTitle className={classes.titleContainer}>
                <img src={`${appConstants.backdropURL}${movie.backdropPath}`}
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
                                movie.genres && <TableRow>
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
