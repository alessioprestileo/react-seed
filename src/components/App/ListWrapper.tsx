import React, { Component } from 'react';

interface listData {
    filmTitle: string
}
interface listState {
    filmData: any,
    visibleOverview: string,
    visibleDetailview: string,
    isActive: string,
    filmTitle: string
}
const listCaption : any = ["Title","Released","Runtime","Genre","Director","imdbRating"];

class ListWrapper extends Component<listData, listState> {
    _isMounted = false;
    constructor(props: any) {
        super(props);
        this.filmTitle = this.props.filmTitle || '';
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
        this._isMounted = true;
        this.getData(this.filmTitle);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    renderListDom = (filmData: any) => {
        let listEle : any= [];
        let movieOverview : any = [];
        let movieDetailedview : any = [];
        let listEleLen : number = 0;
        let processedNodes : number = 0;
        let visibleOverview = this.state.visibleOverview;
        let visibleDetailview = this.state.visibleDetailview;
        let ele = filmData;

        movieOverview = listCaption.map((data: any,idx:number) => {
            if(typeof(ele[data]) == 'string') {
                return(<span key={idx}><strong>{data}: </strong>{ele[data]}</span>);
            } 
        })
        
        for (let keys in ele) {
            if(typeof(ele[keys]) == 'object') {
                let obj = ele[keys];
                let objDom : any = [];
                obj.forEach((objEle: any) => {
                    for (let key in objEle) {
                        objDom.push(<span><strong>{key}: </strong>{objEle[key]}</span>);
                    }
                });
                movieDetailedview.push(<div className="subList"><strong>{keys}: </strong>{objDom}</div>) 
            } else if(keys != "Poster") {
                movieDetailedview.push(<span><strong>{keys}: </strong>{ele[keys]}</span>);
            }
        }
        processedNodes = movieOverview.length;
        if(processedNodes > listEleLen) {
            listEle.push(
                <React.Fragment>
                    <div className="thumbContainer"><img src={ele['Poster']}/></div>
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
                </React.Fragment>
            );
            listEleLen = processedNodes;
        }
        return(
            <div className={"movieList " + this.state.isActive} onClick={this.showDetail}>
                {listEle}
            </div>
        );
    }
    showDetail = (e:any): void => {
        let tar = e.currentTarget;
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