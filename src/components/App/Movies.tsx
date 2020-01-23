import React, { Component } from 'react';
import ListWrapper from './ListWrapper'

interface AppProps {
    //If any custom props
}
 
interface AppState {
    filmList: any,
    listTitle: string
}

class Movies extends Component<AppProps, AppState> {
    constructor(props: any) {
        super(props);
        this.state = { filmList : ["The Shawshank Redemption", "Inception", "Interstellar", "Oblivion"] , listTitle : "Most Popular Movies"};
    }

    searchMovie = (e: any) => {
        if(e.key.toLowerCase() === "enter") {
            const searchKey = e.target.value;
            const makeRequestUrl = "http://www.omdbapi.com/?apikey=a96e4d00&s=" + searchKey;
            const response = fetch(makeRequestUrl).then((response) => { return response.json(); });
            response.then((response: any) => {
                if(response.Search && response.Search.length) {
                    let nameArr : any = [];
                    nameArr = response.Search.map((data:any) => {
                        if(data.Title) {
                            return (data.Title);
                        }
                    });
                    this.setState({
                        filmList: nameArr,
                        listTitle: "Search Results for " + searchKey
                    });
                }
            });
        }
    }

    render() {
        return(
            <div className="wrapper">
                <div className="searchWrap">
                    <div className="title">Search Your Favourite</div>
                    <input className="searchTerm" max="20" placeholder="Movie Name" onKeyUp={this.searchMovie}/>
                </div>
                <div className="title">{this.state.listTitle}</div>
                <div className="listWrapper">
                    {this.state.filmList.map((ele: any) => {
                        return <ListWrapper filmTitle={ele} key={ele}/>;
                    })}
                </div>
            </div>
        )
    }
}

export default Movies;