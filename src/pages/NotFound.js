import React, { Component } from 'react';

import '../styles/pages/notFound.css';

class NotFound extends Component {
  render() {
    return (
      <div data-testid="404-error" id="not-found">
        <h3>Not Found - 404</h3>
        <br />
        <strong>Página não foi encotrada :/</strong>
      </div>);
  }
}

export default NotFound;
