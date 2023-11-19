/** @format */

import FovorReducer from '../Reducers/favorite';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tasks: FovorReducer,
});

export default rootReducer;
