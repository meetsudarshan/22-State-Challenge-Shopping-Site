// index.js

import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';
// Import other reducers as needed

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  // Add other reducers here
});

export default rootReducer;
