import React from 'react';
import ReactLoading from 'react-loading';

import './loading.css'

const Loading = () => (
  <div className="loading-container">
    <ReactLoading type="spin" color="white" height={ 60 } width={ 60 } />
  </div>
);

export default Loading;
