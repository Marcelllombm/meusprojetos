import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../App.css';

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    // console.log(movies);
    return (
      <div className="movie-list">
        {movies.map(((card) => <MovieCard key={ card.title } movie={ card } />))}

      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.instanceOf(Array).isRequired,
};
