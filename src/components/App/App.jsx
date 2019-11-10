import React from 'react';

import './App.scss';
import MoviesList from '../Movies/Movies';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Movies App</h1>
      </header>
      <div className="page"><MoviesList /></div>
    </div>
  );
};

export default App;
