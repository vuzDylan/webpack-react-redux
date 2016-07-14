import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

require('offline-plugin/runtime').install();

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>,
    document.getElementById('react')
  );
};
