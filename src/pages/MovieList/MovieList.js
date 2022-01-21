import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Loading, MovieCard } from '../../components';

import * as movieAPI from '../../services/movieAPI';

import './movieList.css'

const FILMS_BY_LINE = 5;

class MovieList extends Component {
  constructor() {
    super();

    this.getMovies = this.getMovies.bind(this);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    const response = await movieAPI.getMovies();

    this.setState({ movies: response });
  }

  renderMovies(movies, page) {
    return (
      <div id="movies">

        { movies.map((movie, index) => {
          const initialIndex = FILMS_BY_LINE * (page - 1);
          const lastIndex = page * FILMS_BY_LINE - 1;

          if (index >= initialIndex && index <= lastIndex) {
            return <MovieCard key={ movie.title } movie={ movie } />;
          }

          return null;
        }) }
      </div>
    );
  }

  render() {
    const { movies } = this.state;

    if (movies.length === 0) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list" id="movie-list">
        <header>
          <h1>My Movie Library</h1>

          {movies.length > 1 && (
            <Link
              to="/movies/new"
              id="add-button"
            >
              ADICIONAR FILME
            </Link>
          )}
        </header>

        <main>
          <h3>Destaques</h3>
          { movies.length > 1 && this.renderMovies(movies, 1) }

          <h3>Recem adicionados</h3>
          { movies.length > 1 && this.renderMovies(movies, 2) }
        </main>
      </div>
    );
  }
}

export default MovieList;
