import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SearchBlock from '../SearchBlock/SearchBlock';
import SearchDetails from '../SearchDetails/SearchDetails';

const Outlet = () => {

  return (
        <Switch>
            <Route exact path="/" component={SearchBlock} />
            <Route exact path="/details/:id" component={SearchDetails} />
            <Redirect from="*" to="/" />
        </Switch>
  );
};

export default Outlet;
