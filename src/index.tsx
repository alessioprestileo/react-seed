import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import App from './containers/App/App';
import configureStore from './config/storeConfig';

const store = configureStore({});
const history = createBrowserHistory();

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
