
import React from 'react';
import { Route, Switch } from 'react-router';
import { ProductList } from '../components/pages/ProductList';
import { ProductDetail } from '../components/pages/ProductDetail';

class Routes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="app-wrapper">
          <Switch>
            <Route exact path = "/" component = {ProductList}/>
            <Route exact path = "/product:productId" component = {ProductDetail}/>
          </Switch>
        </section>
      </React.Fragment>
    );
  }
}
export default Routes;
export { Routes };
