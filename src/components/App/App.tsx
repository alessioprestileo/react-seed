import React from 'react';
import { hot } from 'react-hot-loader/root';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import ListView from './reports/ListView';
import Detailview from './reports/Detailview';

const App = () => {
  return (
    <Router>
    <div className="app">
      <div className="page">
      <Switch>
        <Route exact path="/">
          <ListView />
        </Route>
        <Route path="/user-detail/:id">
          <Detailview />
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
};

export default hot(App);
