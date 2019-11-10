import React from 'react';
import { ISearchList, IMovie } from '../../pages/MovieGallery/MovieGallery';
import { MovieDetail } from '../MovieDetail';
import classNames from 'classnames';

import './MovieResults.scss';

interface IMoviesIDConfig {
    [key: string]: boolean;
}
interface IMovieResultState {
    moviesIDConfig: IMoviesIDConfig;
    selectedMovieID: string | number;
}

class MovieResults extends React.Component<ISearchList, IMovieResultState> {
    state: IMovieResultState = {
        selectedMovieID: "",
        moviesIDConfig: {},
    }
    componentWillReceiveProps = (nextProps: ISearchList) => {
        const { searchResultsList = [] } = nextProps

        this.constructToggleConfig(searchResultsList);
    }
    componentDidMount() {
        const { searchResultsList = [] } = this.props

        this.constructToggleConfig(searchResultsList)
    }
    toggleMovieDetail = (movieID: string | number): void => {
        const { moviesIDConfig, selectedMovieID } = this.state
        const newIDConfig = {
            ...moviesIDConfig,
            [selectedMovieID]: false,
            ...(selectedMovieID !== movieID ? { [movieID]: true } : {})
        }
        this.setState({ moviesIDConfig: newIDConfig, selectedMovieID: (selectedMovieID !== movieID) ? movieID : "" })
    }
    constructToggleConfig = (searchResultsList: Array<IMovie>): void => {
        let movieDetailState = {}

        searchResultsList.forEach(({ imdbID }) => {
            movieDetailState = { ...movieDetailState, [imdbID]: false }
        })
        this.setState({ moviesIDConfig: movieDetailState })
    }
    render() {
        const { searchResultsList = [] } = this.props
        const { moviesIDConfig } = this.state
        const searchResultsEl = searchResultsList.map((movieItem, idx) => {

            const { Title = "", Year = "", imdbID = "", Type = "", Poster = "" } = movieItem;
            const movieTitle = Title + " (" + Year + ")";

            return (
                <li className={classNames("movie-item", (moviesIDConfig[imdbID]) ? "show" : "")}
                    onClick={this.toggleMovieDetail.bind(this, imdbID)}
                    key={idx}>
                    <img src={Poster} alt={movieTitle.toUpperCase()} />
                    <div className="movie-item-details">
                        <span className="movie-item-name" title={movieTitle.toUpperCase()}>
                            <span className="movie-item-label">Title:</span>
                            {movieTitle}
                        </span>
                        <span className="movie-item-type" title={Type.toUpperCase()}>
                            <span className="movie-item-label">Category:</span>
                            {Type}
                        </span>
                    </div>
                    {moviesIDConfig[imdbID] ? <MovieDetail movieID={imdbID} /> : null}
                </li>
            )
        })

        return <ul id="movies-list">
            {searchResultsEl}
        </ul>
    }
}

export { MovieResults };