import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
  ), document.getElementById('root')
);
