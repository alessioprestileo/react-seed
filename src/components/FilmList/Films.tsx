import React from 'react';
import './Films.scss';
import { isEmptyObject, isNonEmptyArray } from './deps';
import { ListElement } from './type';

class Films extends React.Component<ListElement> {
    state = {
        isShow: false,
    };
    onClick = (): void => {
        this.setState({
            isShow: !this.state.isShow,
        });
    }
    render() {
        const addClass = this.state.isShow ? "show" : "hide";
        const renderRatings = (props: any) => {
            return props.map((props: any, key: any) => {
                return (
                    <div className="rating-container" key={key}>
                        <div className="source">{props.Source}</div>
                        <div className="value">{props.Value}</div>
                    </div>
                );
            });
        };
        const renderAccordion = (props: any) => {
            return (
                <div className="accordion" onClick={this.onClick}>
                    <div className="list-container">
                        <img className="poster" src={props.Poster} alt="NA" />
                        <div className="title">{props.Title}</div>
                        <div className="rating">{props.imdbRating}*</div>
                    </div>
                    <div className={"detail-container " + addClass}>
                        <img className="poster" src={props.Poster} alt="NA" />
                        <div className="tile-container">
                            <div className="title">{props.Title} ({props.Year})</div>
                            <div className="rate-time-genre">
                                <div className="rated">{props.Rated}</div>
                                <div className="run-time">{props.Runtime}</div>
                                <div className="genre">{props.Genre}</div>
                            </div>
                            <div className="meta-score"><b>{props.Metascore}</b> Metascore</div>
                            <div className="plot">{props.Plot}</div>
                            <div className="director"><b>Director:  </b>{props.Director}</div>
                            <div className="actors"><b>Actors:  </b>{props.Actors}</div>
                            <div className="writer"><b>Writer:  </b>{props.Writer}</div>
                            <div className="production"><b>Production:  </b>{props.Production}</div>
                            <div className="box-office"><b>BoxOffice:  </b>{props.BoxOffice}</div>
                            <div className="other-ratings">
                                {isNonEmptyArray(props.Ratings) ?
                                    renderRatings(props.Ratings) : ''}
                            </div>
                        </div>
                    </div>
                </div>
            );
        };
        return (
            <>
                {!isEmptyObject(this.props.film) ? renderAccordion(this.props.film) : ''}
            </>
        );
    }
}

export default Films;
