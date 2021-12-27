import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Rating extends Component {
  render() {
    const { rating } = this.props;

    return <div>{ rating }</div>;
  }
}

Rating.defaultProps = {
  rating: 0,
};

Rating.propTypes = {
  rating: PropTypes.number,
};
