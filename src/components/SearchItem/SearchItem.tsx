import React from 'react';
import { Link } from 'react-router-dom';
import './SearchItem.scss';

const SearchItem = (props: any) => {

  return(
        <Link to={'/details/' + props.item.imdbID}>
            <div className="item">
                <div className="image">
                    <img src={props.item.Poster} />
                </div>
                <div className="item-details">
                    <h3>{props.item.Title}</h3>
                    <p>{props.item.Year}</p>
                </div>
            </div>
        </Link>
  );

};

export default SearchItem;
