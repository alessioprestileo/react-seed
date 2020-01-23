import React, { Component } from 'react';

interface ListProps {
    filmTitle: string
}
interface ListState {
    filmData: any,
    visibleOverview: string,
    visibleDetailview: string,
    isActive: string
}
const listCaption : any = ["Title","Released","Runtime","Genre","Director","imdbRating"];

class ListWrapper extends Component<ListProps, ListState> {
    _isMounted = false;
    constructor(props: any) {
        super(props);
        this.state = {filmData : {}, visibleOverview: "show", visibleDetailview: "hide", isActive: "none"};
    }
    
    getData = (filmTitle: string) => {
        const makeRequestUrl = "http://www.omdbapi.com/?apikey=a96e4d00&t=" + filmTitle;
        const response = fetch(makeRequestUrl).then((response) => { return response.json(); });
        response.then((response: any) => {
            if(this._isMounted) {
                this.setState({
                    filmData: response,
                });
            }
        });
    }
    componentDidMount() {
        const {filmTitle} = this.props;
        this._isMounted = true;
        this.getData(filmTitle);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    renderListDom = (filmData: any) => {
        const {filmTitle} = this.props;
        let movieOverview : any = [];
        const movieDetailedview : any = [];
        const {visibleOverview, visibleDetailview, isActive} = this.state;

        movieOverview = listCaption.map((data: any,idx:number) => {
            if(typeof(filmData[data]) == 'string') {
                const uniqueKey = filmData["Title"]? filmData["Title"].replace(/ /g,"-") + idx : idx;
                return(<span key={uniqueKey}><strong>{data}: </strong>{filmData[data]}</span>);
            } 
        })
        
        for (const details in filmData) {
            let uniqueKey = filmData["Title"]? filmData["Title"].replace(/ /g,"-") + details : details;
            if(typeof(filmData[details]) == 'object') {
                const obj = filmData[details];
                const objDom : any = [];
                obj.forEach((objEle: any, idx:number) => {
                    for (const element in objEle) {
                        uniqueKey = uniqueKey + idx + element;
                        objDom.push(<span key={uniqueKey}><strong>{element}: </strong>{objEle[element]}</span>);
                    }
                });
                movieDetailedview.push(<div key={uniqueKey} className="subList"><strong>{details}: </strong>{objDom}</div>) 
            } else if(details != "Poster") {
                movieDetailedview.push(<span key={uniqueKey}><strong>{details}: </strong>{filmData[details]}</span>);
            }
        }

        return(
            <div className={"movieList " + isActive} key={filmTitle} onClick={this.showDetail}>
                <div className="thumbContainer"><img src={filmData['Poster']}/></div>
                <div className={"movieOverview " + visibleOverview}>
                    <div className="movieDetails">
                        {movieOverview}
                    </div>
                </div>
                <div className={"movieDetailedView " + visibleDetailview}>
                    <div className="movieDetails">
                        {movieDetailedview}
                    </div>
                </div>
            </div>
        );
    }
    showDetail = (e:any): void => {
        const tar = e.currentTarget;
        let visibleOverview = "";
        let visibleDetailview = "";
        let isActive = "";
        if(tar.classList.contains('active')) {
            visibleOverview = "show";
            visibleDetailview = "hide";
            isActive = "none";
        } else {
            visibleOverview = "hide";
            visibleDetailview = "show";
            isActive = "active";
        }
        this.setState({
            visibleOverview: visibleOverview,
            visibleDetailview: visibleDetailview,
            isActive: isActive
        });
    }
    render(){
        return(
            <React.Fragment>{this.renderListDom(this.state.filmData)} </React.Fragment>
        );
    }
}
export default ListWrapper;