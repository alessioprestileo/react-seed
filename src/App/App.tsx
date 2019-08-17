import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { Routes } from '../routes';

const App = () => {
  const appTitle = 'This is a seed for a React project';

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">{appTitle}</h1>
      </header>
      <div className="page">
        <Router>
          <Routes/>
        </Router>
      </div>
    </div>
  );
};

export default hot(App);
