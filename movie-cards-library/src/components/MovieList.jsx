import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    // console.log(movies);
    return (
      <div>
        {movies.map(((card) => <MovieCard key={ card.title } movie={ card } />))}

      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.instanceOf(Array).isRequired,
};
