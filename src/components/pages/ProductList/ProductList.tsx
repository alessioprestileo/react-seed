import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Link } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { Catalog } from '../../../models/catalog';
import { ProductCardProps } from './model';
import './styles.scss';
@observer
class ProductList extends React.Component{
  @observable productList:any = [];
  renderProductList(product : ProductCardProps) {
    return <ProductCard {...product} />;
  }
  renderBreadcrumb = () => {
    return(
        <div className="breadcrumb-container">
            <span className="bradcrumb-content">
                <Link to="/" className="breadcrumb-link">Home</Link>
            </span>
            <span className="bradcrumb-content"> > </span>
            <span className="bradcrumb-content">
                <Link to="/" className="breadcrumb-link">productList</Link>
            </span>
        </div>
    );
  }
  render() {
    return (
        <div>
            <div className="breadcrumb-wrapper">
                {this.renderBreadcrumb()}
            </div>
            <div className = "product-list-wrapper">
            {this.productList.length > 0 ? this.productList.map(this.renderProductList) : ''}
            </div>
        </div>
    );
  }
  componentDidMount = async() => {
    const catalog = new Catalog;
    this.productList = await catalog.getProductList();
    console.log('productList', this.productList);
  }
}
export default ProductList;
export { ProductList };
