import React, { Component } from 'react';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

import '../styles/pages/newMovie.css';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    await movieAPI.createMovie(newMovie);

    this.setState({ shouldRedirect: true });
  }

  render() {
    const { shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="new-movie" id="new-movie">
        <div id="new-movie-content">
          <h1>Adicionar filme</h1>
          <MovieForm onSubmit={ this.handleSubmit } />
        </div>

      </div>
    );
  }
}
export default NewMovie;
