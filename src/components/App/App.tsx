import React from 'react';
import { hot } from 'react-hot-loader/root';

import './App.scss';

const App = () => {
  const appTitle = 'This is a seed for a React project';

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">{appTitle}</h1>
      </header>
    </div>
  );
};

export default hot(App);
