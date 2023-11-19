/** @format */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import FovorReducer from '../Reducers/favorite';

const store = createStore(
  FovorReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
