import React from 'react';
import ReactLoading from 'react-loading';

import '../styles/components/loading.css';

const Loading = () => (
  <div className="loading-container">
    <ReactLoading type="spin" color="white" height={ 60 } width={ 60 } />
  </div>
);

export default Loading;
