import React from 'react';
import { IMovie } from '../../pages/MovieGallery/MovieGallery';
import { MovieGallery } from '../../pages';
import axios from 'axios';

import './MovieDetail.scss';

interface IMovieDetail extends IMovie {
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
    Awards: string;
    Ratings?: Array<any>;
    Metascore: string;
    imdbRating: string | number;
    imdbVotes: string | number;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response?: string;
    isError?: boolean;
    [key: string]: string | any;
}


class MovieDetail extends React.Component<any, IMovieDetail> {
    state = {
        Title: "", Year: "", imdbID: "",
        Type: "", Poster: "", Rated: "",
        Released: "", Runtime: "", Genre: "",
        Director: "", Writer: "", Actors: "",
        Plot: "", Language: "", Country: "",
        Awards: "", Metascore: "", imdbRating: "",
        imdbVotes: "", DVD: "", BoxOffice: "",
        Production: "", Website: "",
        isError: false,
    }
    isComponentMounted: boolean;

    constructor(props: any) {
        super(props)
        this.isComponentMounted = false;
    }

    componentDidMount() {
        const { movieID } = this.props
        this.isComponentMounted = true;
        axios.get("http://www.omdbapi.com/?apikey=" + MovieGallery.apiKey + "&i=" + movieID)
            .then(({ data }: any) => {
                this.isComponentMounted && this.setState({ ...data })
            }).catch((error) => {
                this.setState({ isError: true })
                console.log(error);
            })
    }
    componentWillUnmount() {
        this.isComponentMounted = false;
    }
    render() {
        const stateCopy: IMovieDetail = { ...this.state }
        const { isError } = stateCopy
        const objectBanList = ["Ratings", "Poster", "imdbID", "Response", "isError"]
        return <div className="movie-detail">
            {Object.keys(stateCopy).map((key): any => {
                const labelValue = (stateCopy[key] && typeof stateCopy[key] === "string") ? stateCopy[key] : "";
                return (
                    <React.Fragment key={key}>
                        {!objectBanList.includes(key) ?
                            <span className="movie-detail-item" key={key} title={labelValue}>
                                <span className="movie-detail-label">{key}:</span>
                                {labelValue}
                            </span> :
                            ((isError) ? <span className="movie-detail-item">Sorry! Unable to fetch details.</span> : null)
                        }
                    </React.Fragment>
                )
            })}
        </div >
    }
}

export default MovieDetail;
export { MovieDetail };