const React = require('react');
const ReactDOM = require('react-dom');

const routes = require('./config/routes.js');

ReactDOM.render(
  routes,
  document.getElementById('app')
);
