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
   // const appTitle = 'This is a seed for a React project';

  return (
    <Router>
    <div className="app">
      {/* <header className="app-header">
        <h1 className="app-title">{appTitle}</h1>
      </header>
      <div className="page">Insert the app content here.</div> */}
      <Switch>
        <Route exact path="/">
          <ListView />
        </Route>
        <Route path="/user-detail/:id">
          <Detailview />
        </Route>
      </Switch>
    </div>
    </Router>
  );
};

export default hot(App);
