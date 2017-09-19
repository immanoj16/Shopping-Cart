"use strict"

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

// IMPORT COMBINED REDUCERS
import reducers from './reducers';
// IMPORT ACTIONS
import { addToCart } from "./actions/cartActions";
import { postBooks, deleteBooks, updateBooks } from "./actions/booksActions";
import BooksList from './components/pages/BooksList';

// STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <BooksList/>
  </Provider>,
  document.getElementById('app')
);

// STEP 2  create and dispatch actions
store.dispatch(postBooks([{
    id: 1,
    title: 'this is the book title',
    description: 'this is the book description',
    price: 33.33
  },
  {
    id: 2,
    title: 'this is second book title',
    description: 'this is second book description',
    price: 50
  }])
);

// DELETE a second action
// store.dispatch(deleteBooks({id: 1}));

// UPDATE  a book
/*store.dispatch(updateBooks({
  id: 2,
  title: 'Learn React in 24h'
}));*/

// ==>> CART ACTIONS <==
// store.dispatch(addToCart([{id: 1}]));
