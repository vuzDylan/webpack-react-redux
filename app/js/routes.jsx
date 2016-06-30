import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

function errorLoading(err) {
 console.error('Dynamic page loading failed', err);
}


function loadRoute(cb) {
 return (module) => cb(null, module.default);
}

export default (
  <Route component={App} path='/'>
    <IndexRoute getComponent={(location, cb) => {
      System.import('./components/Home').then(loadRoute(cb)).catch(errorLoading);
    }} />
    <Route path='profile' getComponent={(location, cb) => {
      System.import('./components/Profile').then(loadRoute(cb)).catch(errorLoading);
    }}/>
    <Route path='home' getComponent={(location, cb) => {
      System.import('./components/Home').then(loadRoute(cb)).catch(errorLoading);
    }}/>
  </Route>
);
