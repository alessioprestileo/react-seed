import React from 'react';
import { List } from './List';
import { DetailViewProps } from './DetailViewTypes';

const RenderDetailView = (props : DetailViewProps) => {
  console.log('on', props);
  const { movie } = props;
  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Metascore,
    imdbRating,
    imdbVotes,
    imdbID,
    DVD,
    BoxOffice,
    Production,
    Website,
    Response,
  } = movie;

  const addDefaultPoster = (e: any) => {
    e.target.src = 'https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg';
  };

  return (
    <section>
      <div className="detailContentWrapper banner-img">
        <div className="detailbanner">
          <img alt="movie poster" onError={addDefaultPoster} src={Poster} />
        </div>
      </div>
      <List label="Title" value={Title} />
      <List label="Year" value={Year} />
      <List label="Rated" value={Rated} />
      <List label="Released" value={Released} />
      <List label="Runtime" value={Runtime} />
      <List label="Genre" value={Genre} />
      <List label="Director" value={Director} />
      <List label="Writer" value={Writer} />
      <List label="Actors" value={Actors} />
      <List label="Plot" value={Plot} />
      <List label="Language" value={Language} />
      <List label="Country" value={Country} />
      <List label="Awards" value={Awards} />
      <List label="Metascore" value={Metascore} />
      <List label="imdbRating" value={imdbRating} />
      <List label="imdbVotes" value={imdbVotes} />
      <List label="imdbID" value={imdbID} />
      <List label="DVD" value={DVD} />
      <List label="BoxOffice" value={BoxOffice} />
      <List label="Production" value={Production} />
      <List label="Website" value={Website} />
      <List label="Response" value={Response} />
    </section>
  );
};

export { RenderDetailView };
export default RenderDetailView;
