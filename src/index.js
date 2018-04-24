import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import data from './testData'
import PropTypes from 'prop-types';
import App from './components/app';

ReactDOM.render(
  <App contests={ data.contests }/>,
  document.getElementById('root')
);
