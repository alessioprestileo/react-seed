import React from 'react';
import { hot } from 'react-hot-loader/root';

import './App.scss';
import Movies from './Movies';
const App = () => {
  const appTitle = 'The Movie DataBase';

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">{appTitle}</h1>
      </header>
      <div className="page"><Movies/></div>
    </div>
  );
};

export default hot(App);
