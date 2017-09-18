"use strict"
import { createStore } from 'redux';

// IMPORT COMBINED REDUCERS
import reducers from './reducers';
// IMPORT ACTIONS
import { addToCart } from "./actions/cartActions";
import { postBooks, deleteBooks, updateBooks } from "./actions/booksActions";

// STEP 1 create the store
const store = createStore(reducers);

store.subscribe(function () {
  console.log('current state is: ', store.getState());
});


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
store.dispatch(deleteBooks({id: 1}));

// UPDATE  a book
store.dispatch(updateBooks({
  id: 2,
  title: 'Learn React in 24h'
}));

// ==>> CART ACTIONS <==
store.dispatch(addToCart([{id: 1}]));
