import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.hydrate (
  <App initialData={window.initialData} />,
  document.getElementById('root')
);
