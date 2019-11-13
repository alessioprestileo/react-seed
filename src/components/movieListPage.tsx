import React from 'react';
import { getListView } from './ListView';

const Movie = () => {
  const [movie, setMovie] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('fast');
  const getData = async () => {
    if (searchTerm !== '') {
      const data = await fetch(
        `https://www.omdbapi.com/?s=${searchTerm}&type=movie&apikey=85bd3106`,
      );
      const movieData = await data.json();
      setMovie(movieData.Search);
    }
  };

  const getMovieSearchText = (e:any) => {
    setSearchTerm(e.currentTarget.value);
  };
  const onSearchSubmit = () => {
    getData();
  };

  React.useEffect(() => {
    getData();
  },              []);

  return (
    <div className="App">
      <h1>Movie List</h1>
      <input onChange={getMovieSearchText} type="text" />
      <button onClick={onSearchSubmit}>Submit</button>
      {getListView(movie)}
    </div>
  );
};

export { Movie };
export default Movie;
