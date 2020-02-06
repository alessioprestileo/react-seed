import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetail, Header, PageNotFound } from '../../components';
import './styles.scss';

const App = () => {
  return (
    <>
      <Header />
      <section className="page">
        <Router>
          <Switch>
            <Route path="/" exact component={MovieList} />
            <Route path="/detail/:id" exact component={MovieDetail} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </section>
    </>
  );
};
export { App };
export default hot(App);
