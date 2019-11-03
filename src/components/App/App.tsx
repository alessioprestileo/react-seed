import React from 'react';
import { hot } from 'react-hot-loader/root';
import Content from '../App/Content';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

const App = () => {
  const appTitle = 'This is a seed for a React project';

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">{appTitle}</h1>
      </header>
      <Content></Content>
    </div>
  );
};

export default hot(App);
