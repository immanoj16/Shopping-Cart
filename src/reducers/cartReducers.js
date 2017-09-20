// CART REDUCERS
export function cartReducers(state={cart: []}, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {cart: [...state.cart, ...action.payload]};

    case "DELETE_CART_ITEM":
      return {...state, cart: action.payload};
  }
  return state;
}
