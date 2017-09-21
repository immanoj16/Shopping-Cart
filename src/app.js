"use strict"

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

// IMPORT COMBINED REDUCERS
import reducers from './reducers';
import BooksList from './components/pages/BooksList';
import Menu from './components/Menu';
import Footer from './components/Footer';

// STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Menu />
      <BooksList />
      <Footer />
    </div>
  </Provider>,
  document.getElementById('app')
);
