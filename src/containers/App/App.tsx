import React, { Fragment, Component } from 'react';
import { hot } from 'react-hot-loader/root';

import { MuiThemeProvider, CssBaseline, Grid } from '@material-ui/core';
import appTheme from '../../styles/mainTheme';
import { AppState } from '../../store';

import './App.scss';
import { connect } from 'react-redux';

import Movies from '../Movies/MoviesContainer';
import Header from '../../components/Header/Header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={appTheme}>
          <Grid container>
            <Header searchKey=""></Header>
            <Movies></Movies>
          </Grid>
        </MuiThemeProvider>
      </Fragment >
    );
  }
}

const mapStateToProps = ({ movies }: AppState) => {
  return {
    ...movies,
  };
};

export default connect(mapStateToProps)(hot(App));
