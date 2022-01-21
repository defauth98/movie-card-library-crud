import React, { Component } from 'react';

import './notFound.css'

class NotFound extends Component {
  render() {
    return (
      <div data-testid="404-error" id="not-found">
        <h3>Not Found - 404</h3>
        <br />
        <strong>Página não foi encontrada :/</strong>
      </div>);
  }
}

export default NotFound;
