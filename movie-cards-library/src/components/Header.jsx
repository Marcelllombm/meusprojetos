import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <header>
        <h1>Movie Cards Library</h1>
      </header>
    );
  }
}

