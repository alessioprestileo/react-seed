import React from 'react';
import Films from './Films';
import { isNonEmptyArray } from './deps';
import { FilmLists } from './type';

const films: any = ['How to train your dragon', 'Fast & Furious 6', 'Gladiator', 'Captain Marvel', 'Iron Man 3'];
const resultArray: any = [];

class FilmList extends React.Component {
  state: FilmLists = { list:[] };
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    films.forEach((props: any) => {
      this.fetchAPI(props);
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  fetchAPI = (filmTitle: string): void => {
    const requestParams = {
      url: "http://www.omdbapi.com/?apikey=ff0b7c4&t=" + filmTitle,
    };
    const response = fetch(requestParams.url).then((response) => { return response.json(); });
    response.then((response: any) => {
      if(this._isMounted) {
        resultArray.push(response);
        this.setState({
          list: resultArray,
        });
      }
    });
  }
  render() {
    return (
      <>
        {isNonEmptyArray(this.state.list) && this.state.list.map((props: any, key: any) => {
          return <Films film={props} key={key} />;
        })}
      </>
    );
  }
}
export default FilmList;
