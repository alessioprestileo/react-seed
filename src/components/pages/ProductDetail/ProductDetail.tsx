import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { BreadCrumb } from '../../../utils/Breadcrumb';
import { Catalog } from '../../../models/catalog';
import { isEmpty } from '../../../utils/utils';
import { ProductDetailProps, ProductResponse } from './schema';
import './styles.scss';

const breadcrumbList = [
  {
    name : 'Products',
    url : '/',
  }, {
    name : 'Product',
    url : '',
  },
];
@observer
class ProductDetail extends React.Component<ProductDetailProps>{
  @observable productDetails = {} as ProductResponse;

  renderProduct = () => {
    const { Poster, Title, Director, Year, imdbRating, Language, Runtime } = this.productDetails;
    return(
      <div>
      {<BreadCrumb  breadcrumbList={breadcrumbList}/>}
      <div className="product-wrapper">
        <div className="product-image">
          <img src={Poster} alt="productImage"/>
        </div>
        <div className="product-description">
          <div className="product-name">
            {Title}
          </div>
          <div className="product-content">
            {` The film is directed by ${Director} and released at ${Year}` }
          </div>
          <div className="product-rating">
            <div>IMDB Rating : <span className="product-value">{imdbRating}</span></div>
          </div>
          <div className="product-language">
            Language : <span className="product-value">{Language}</span>
          </div>
          <div className="product-running-time">
            Running Time  : <span className="product-value">{Runtime}</span>
          </div>
        </div>
      </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        {!isEmpty(this.productDetails) && this.renderProduct()}
      </div>
    );
  }
  componentDidMount = async() => {
    const { productId } = this.props.match.params;
    const catalog = new Catalog();
    this.productDetails = await catalog.getProductDetail(productId);
  }
}
export default ProductDetail;
export { ProductDetail };
