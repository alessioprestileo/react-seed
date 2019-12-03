import React from 'react';
import { hot } from 'react-hot-loader/root';
import Outlet from '../Router/Outlet';

import './App.scss';

const App = () => {
  const appTitle = 'OMDB Search List';

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">{appTitle}</h1>
      </header>
      <Outlet />
    </div>
  );
};

export default hot(App);
