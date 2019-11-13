import React from 'react';
import { getListView } from './ListView';

const Movie = () => {
  const [movie, setMovie] = React.useState(false);
  const getData = async () => {
    const data = await fetch(
      'https://www.omdbapi.com/?s=avengers&type=movie&apikey=85bd3106'
    );
    const movieData = await data.json();
    setMovie(movieData.Search);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Movie List</h1>
      {getListView(movie)}
    </div>
  );
};

export { Movie };
export default Movie;
