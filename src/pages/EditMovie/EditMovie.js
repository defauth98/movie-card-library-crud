import React, { Component } from 'react';
import { Redirect } from 'react-router';

import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../../components';
import * as movieAPI from '../../services/movieAPI';

import './editMovie.css';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: '',
      shouldRedirect: false,
      status: 'loading',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);

    this.setState({ shouldRedirect: true });
  }

  async getMovie() {
    const { match } = this.props;
    const { params } = match;

    const movie = await movieAPI.getMovie(params.id);

    this.setState({ movie, status: '' });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie" id="edit-movie-container">
        <div id="edit-movie-content">
          <h1>Editar filme</h1>
          <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        </div>
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired }),
  }).isRequired,
};

export default EditMovie;
