import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCardProps } from './model';
import './styles.scss';
class ProductCard extends React.Component<ProductCardProps>{
  render () {
    const { Poster, imdbID, Title, Year } = this.props;
    const url = `/product/${imdbID}`;
    return (
        <div className="Product-container">
            <Link to={url} className="image-container-wrapper">
                <img src={Poster} className="product-image"/>
            </Link>
            <div className = "product-description">
                <div className="product-title">{Title}</div>
                <div className="product-year">{Year}</div>
            </div>
        </div>
    );
  }
}
export default ProductCard;
export { ProductCard };
