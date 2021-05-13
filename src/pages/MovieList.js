import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

import '../styles/pages/movieList.css';

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

  renderMovies(movies) {
    return (
      <div id="movies">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list" id="movie-list">
        <h1 id="title">My Movie Library</h1>

        <Link to="/movies/new" id="add-button">ADICIONAR CARTÃO</Link>

        { movies.length > 1 ? this.renderMovies(movies) : <Loading /> }
      </div>
    );
  }
}

export default MovieList;
