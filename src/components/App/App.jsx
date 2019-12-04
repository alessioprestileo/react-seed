import React from 'react';
import { hot } from 'react-hot-loader/root';
import Movies from '../MovieList/MovieList';
import './App.scss';

const App = () => {
  const appTitle = 'OMDB';

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">{appTitle}</h1>
      </header>
      <div className="page"><Movies /></div>
    </div>
  );
};

export default hot(App);
