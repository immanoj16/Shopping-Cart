"use strict"

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

// IMPORT COMBINED REDUCERS
import reducers from './reducers';
import BooksList from './components/pages/BooksList';
import Cart from './components/pages/Cart';
import BooksForm from './components/pages/BooksForm';
import Main from './Main';

// STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

const Routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={BooksList} />
        <Route path="/admin" component={BooksForm} />
        <Route path="/cart" component={Cart} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  Routes,
  document.getElementById('app')
);
