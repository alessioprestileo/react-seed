import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import get from 'get-value';
import { fetchAPI } from '../../API';
import { ProductCard } from './ProductCard';
import './Products.scss';

@observer
class ProductList extends Component {
  constructor(props: any) {
    super(props);
    this.makeAPI();
  }
  @observable productData = {
    products : [],
  };
  componentDidMount() {
    this.makeAPI();
  }
  makeAPI = async() => {
    this.productData = await fetchAPIResponse();
  }
  renderCards = (product: any) => {
    return (
      <ProductCard product={product} />
    );
  }
  render() {
    if (this.productData.products.length > 0) {
      return (
        <div>
        <span>Title</span>:
        <span className="category-name">{get(this.productData, 'category.identifier')} </span>
        <div className="list-wrapper">{this.productData.products.map(this.renderCards)}</div>
        </div>
      );
    }
    return ('Waiting for API...');
  }
}

async function fetchAPIResponse() {
  const response = await fetchAPI({
    method:'GET',
    dynamicURL: 'category/combo/products',
  });
  return response;
}
export { ProductList, fetchAPIResponse };
export default ProductList;
