import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './store';
import { Router, useRouterHistory } from 'react-router'
import { createHistory } from 'history'

import 'bootstrap/dist/css/bootstrap.css';

const history = useRouterHistory(createHistory)({
  basename: '/'
})

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>,
    document.getElementById('react')
  );
};
