import React from 'react';
import { hot } from 'react-hot-loader/root';

import './App.scss';

import FilmList from '../FilmList';

const App = () => {
  const appTitle = 'Thiru\'s Assignment for Zirius';

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">{appTitle}</h1>
      </header>
      <div className="page"><FilmList /></div>
    </div>
  );
};

export default hot(App);
