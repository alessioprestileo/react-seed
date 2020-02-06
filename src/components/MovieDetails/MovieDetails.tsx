import React from 'react';
import { MovieDetailsDataType } from './typings';
import './styles.scss';

function renderDetail(data: {
  [key: number]: string;
  Poster?: string;
}) {
  const detailsToHide = ['Poster', 'Ratings', 'imdbID', 'Response', 'Website'];
  const detailedListNode = [];

  for (const key in data) {
    detailsToHide.indexOf(key) === -1 && (
      detailedListNode.push(
        <>
          <dt className="info-key">{key}</dt>
          <dd className="info-value">{data[key]}</dd>
        </>,
      )
    );
  }

  return (
    <div>
      <img src={data.Poster} />
      <dl className="poster-detail">
        {detailedListNode}
      </dl>
    </div>
  );
}

const MovieDetail = (props: MovieDetailsDataType) => {
  const {
    history,
    match: { params },
  } = props;
  const [movieData, setMovieData] = React.useState({} as { Response?: string, Error?: string });

  async function fetchData() {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${params.id}&apikey=b686d1e0`,
    );
    const data = await response.json();
    setMovieData(data);
  }

  React.useEffect(() => {
    fetchData();
  },              []);

  return (
    <section className="description-list-section">
      <div className="go-back-link" onClick={history.goBack}>
        {'<< Go back to Movie List'}
      </div>
      {Object.keys(movieData).length === 0 ? (
        <h2>Loading...</h2>
      ) : movieData.Response === 'False' ? (
        <h2>Movie ID doesn't exist</h2>
      ) : (
            renderDetail(movieData)
          )}
    </section>
  );
};

export { MovieDetail };
export default MovieDetail;
