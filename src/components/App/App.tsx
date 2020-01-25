import React from 'react';

import './App.scss';
import Filmes from '../Filmes/Filmes';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Filmes List</h1>
      </header>
      <div className="page"><Filmes /></div>
    </div>
  );
};

export default App;
