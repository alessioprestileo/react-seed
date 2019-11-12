import React from 'react';
import { SearchBox, MovieResults } from '../../widgets';
import axios from 'axios';

import { movieData } from './fixture';

import './MovieGallery.scss';

export interface IMovie {
    Title: string;
    Year: string | number;
    imdbID: string | number;
    Type: string;
    Poster: string;
};

export interface ISearchList {
    searchResultsList: Array<IMovie>;
};

export interface IState extends ISearchList {
    searchKey: string | number;
    hasError?: boolean;
    notFound?: boolean;
};


class MovieGallery extends React.Component {

    constructor(props: any) {
        super(props);
    }

    state: IState = {
        searchKey: "Avengers",
        searchResultsList: movieData,
        notFound: false,
    }

    static apiKey: string = "8d901986";

    searchMovie = (event: React.FormEvent): void => {
        event && event.preventDefault();
        const { searchKey } = this.state
        searchKey && axios.get("http://www.omdbapi.com/?apikey=" + MovieGallery.apiKey + "&s=" + searchKey)
            .then(({ data }: any) => {
                const { Search: searchResultsList = [], Error } = data
                if (!Error) {
                    this.setState({ searchResultsList, notFound: false })
                } else {
                    this.setState({ searchResultsList, notFound: true })
                }
            }).catch((error) => {
                this.setState({ hasError: true })
                console.log(error);
            }) || this.setState({ searchResultsList: [], notFound: true })
    }

    handleSearchKeyChange = (event: any): void => {
        const searchKey = event.target.value
        this.setState({ searchKey, notFound: false, hasError: false })
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        const { searchKey = "", searchResultsList = [], hasError = false, notFound = false } = this.state
        const renderResultSection = <>
            {!notFound ?
                <MovieResults searchResultsList={searchResultsList} /> :
                ((searchKey) ? <div className="no-results">Sorry! No Results found for {"`" + searchKey + "`"}</div> :
                    <div className="no-results">Search string cannot be empty. Please enter and try again!</div>)
            }
        </>

        return <div id="movie-gallery">
            {
                !hasError ?
                    <>
                        <form id="search-container" name="searchMovie" onSubmit={this.searchMovie}>
                            <SearchBox placeholder="Search movies..." className="search-box" value={searchKey} onChange={this.handleSearchKeyChange} />
                        </form>
                        {renderResultSection}
                    </> :
                    <div className="exception">Oops! Technical difficulties. Please reload and try again.</div>
            }
        </div>
    }
}

export { MovieGallery }