import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/components/movieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, imagePath } = movie;

    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={ imagePath } alt={ title } />
        <div className="card-info">
          <h2>{ title }</h2>
          <h1>{ subtitle }</h1>
          <div className="link-container">
            <Link to={ `/movies/${id}` }>VER DETALHES</Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
