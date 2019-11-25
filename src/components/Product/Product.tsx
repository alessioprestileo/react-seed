import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import get from 'get-value';
import { Link } from 'react-router-dom';
import { fetchAPI } from '../../API';
import './Products.scss';

@observer
class Product extends Component {
  constructor(props : any) {
    super(props);
    this.makeAPI();
  }
  @observable productData: any = {};
  componentDidMount() {
    this.makeAPI();
  }
  makeAPI = async() => {
    this.productData = await makeProductCall(get(this.props, 'match.params.productId'));
  }
  renderSpecification = () => {
    const description = get(this.productData, 'product.properties.description', '') || '';
    const jsonDescription = description ? JSON.parse(description) : [];
    return (
      <div>
        <div className="product-title">Product Detail and Specifications</div>
        <table className="product-specification-wrapper">
          {jsonDescription.map((desc: {label: String, value: String }) => {
            return (
              <tr className="product-wrapper">
                <td className="product-specification-name-title">{desc.label}</td>
                <td className="product-specification-value-title">{desc.value}</td>
              </tr>
            );
          })}
        </table>
    </div>
    );
  }
  render() {
    const { product = {} } = this.productData || {};
    const currency = get(product, 'price.currency', 'INR') || 'INR';
    const price = get(product, 'price.salePrice', '') || '';

    if (get(this.productData, 'product')) {
      return (
        <div>
          <Link to="/"> Click to view the list   </Link>
          <div className="product-detail-container">
            <div className="product-image-wrapper">
              <img
                src={get(product, 'properties.image', '')}
                alt={get(product, 'properties.name', '')}
              />
            </div>
            <div className="product-description-wrapper">
              <span className="product-brand-title">{get(this.productData, 'product.properties.brand', '')}</span>
              <span className="product-name-title">{get(this.productData, 'product.properties.name', '')}</span>
              <div className="product-price-wrapper">
                <span>Price :</span>
                <span className="product-price">{`${currency} ${price}`}</span>
              </div>
            </div>
          </div>
          {this.renderSpecification()}
        </div>
      );
    }
    return ('Waiting for API...');
  }
}
async function makeProductCall(productId :string) {
  const response = await fetchAPI({
    method:'GET',
    dynamicURL: `category/products/${productId}`,
  });
  return response;
}
export default Product;
export { Product, makeProductCall };
