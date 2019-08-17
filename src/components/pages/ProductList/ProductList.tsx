import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Catalog } from '../../../models/catalog';

@observer
class ProductList extends React.Component{
  @observable productList:any = [];
  render() {
    return 'hai i am working';
  }
  componentDidMount = async() => {
    const catalog = new Catalog;
    this.productList = await catalog.getProductList();
    console.log('productList', this.productList);
  }
}
export default ProductList;
export { ProductList };
