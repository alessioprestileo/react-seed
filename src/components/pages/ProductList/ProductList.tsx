import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { ProductCard } from './ProductCard';
import { Catalog } from '../../../models/catalog';
import { ProductCardProps } from './schema';
import { BreadCrumb } from '../../../utils/Breadcrumb';
import './styles.scss';
const breadcrumbList = [{
  name : 'Products',
  url : '',
}];
@observer
class ProductList extends React.Component{
  @observable productList:any = [];
  renderProductList(product : ProductCardProps, index:number) {
    return <ProductCard {...product} key={index} />;
  }
  render() {

    return (
        <div>
            {<BreadCrumb  breadcrumbList={breadcrumbList}/>}
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
