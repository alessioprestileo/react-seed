import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import loadable from '@loadable/component';
import App from '../App/App';
import  { pageComponents } from './path';

const ComponentRender = loadable((props: {Component: String}) =>
  import(`../${props.Component}/${props.Component}`),
);

const renderRoutes = (routes: any) => {
  return routes.map((route: any, index: number) => {
    const { path } = route;
    return (
      <Route
        key={route.key || index}
        path={path}
        exact
        strict
        render={(routeProps: any) => {
          const locationQueryString = routeProps.location.search || '';
          const queryParams = locationQueryString && JSON.parse(locationQueryString.slice(1));

          routeProps.location.queryParams = queryParams;

          return <ComponentRender {...routeProps} {...route} />;
        }}
      />
    );
  });
};

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <App />
        <section className="app-wrapper position-relative">
          <Switch>{renderRoutes(pageComponents)}</Switch>
        </section>
        </Router>
    );
  }
}

export { Routes };
