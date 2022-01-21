import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import {MovieList, MovieDetails, NewMovie, EditMovie, NotFound} from './pages';

import './styles/global.css';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
          exact
        />
        <Route
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route component={ NotFound } />
      </Switch>
    </HashRouter>
  );
}

export default App;
