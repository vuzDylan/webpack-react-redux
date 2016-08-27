import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createHistory } from 'history'; // eslint-disable-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.css';
import { Router, useRouterHistory } from 'react-router';
import routes from './routes';
import store from './store';


const history = useRouterHistory(createHistory)({
  basename: '/',
});

if (module.hot) module.hot.accept();

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
