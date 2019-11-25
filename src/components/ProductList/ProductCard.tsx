import React, { Component } from 'react';
import { observer } from 'mobx-react';
import get from 'get-value';
import { Link } from 'react-router-dom';
// import { observable } from 'mobx';
import './Products.scss';

@observer
class ProductCard extends Component <{product: { identifier: String }}>{
  render() {
    return (
      <div className="list-card-wrapper">
        <div className="list-image-wrapper">
          <img
            className="list-image-container"
            src={get(this.props, 'product.properties.image', '')}
            alt={'Image Not found'}
          />
        </div>
        <Link to={`/products/${get(this.props, 'product.identifier', '')}`}>
          <span className="list-name">{get(this.props, 'product.properties.name', '')}</span>
        </Link>
      </div>
    );
  }
}

export { ProductCard };
