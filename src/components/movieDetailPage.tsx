import React from 'react';
import { RenderDetailView } from './DetailsView';

const MovieDetail = (props: any) => {
  console.log('Movielist', props.match.params.id);
  const [movieData, setMovieData] = React.useState({});

  const showDetailview = async (id: any) => {
    let movieDetail = await fetch(
      `https://www.omdbapi.com/?i=${id}&type=movie&apikey=85bd3106`
    );
    movieDetail = await movieDetail.json();
    console.log('renderDetailView', movieDetail);
    setMovieData(movieDetail);
  };

  React.useEffect(() => {
    console.log('Movielist1', props.match.params.id);
    showDetailview(props.match.params.id);
  }, []);
  return (
    <div>
      {' '}
      <RenderDetailView movie={movieData} />
    </div>
  );
};

export { MovieDetail };
export default MovieDetail;
