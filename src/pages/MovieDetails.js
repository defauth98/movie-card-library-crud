import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';

import { Loading } from '../components';

import '../styles/pages/movieDetail.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.getMovie = this.getMovie.bind(this);

    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  async handleDelete(id) {
    await movieAPI.deleteMovie(id);
  }

  async getMovie() {
    const { match } = this.props;
    const { params } = match;
    const movie = await movieAPI.getMovie(params.id);

    this.setState({ movie, loading: false });
  }

  render() {
    const { movie, loading } = this.state;

    if (loading) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details" id="movie-container">
        <div id="movie">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <div className="movie-info">
            <h1>{`Title: ${title}`}</h1>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
          </div>

          <div id="movie-buttons">
            <Link to="/">VOLTAR</Link>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            <Link to="/" onClick={ () => this.handleDelete(id) }>DELETAR</Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
