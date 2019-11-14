import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import { Movie } from '../movieListPage';
import { MovieDetail } from '../movieDetailPage';
import './App.scss';

const App = () => {
  const appTitle = 'IMDB Movie Details';

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">{appTitle}</h1>
      </header>
      <div className="page">
        <Router>
          <Route path="/" exact component={Movie} />
          <Route path="/movie/:id" component={MovieDetail} />
        </Router>
      </div>
    </div>
  );
};

export default hot(App);
