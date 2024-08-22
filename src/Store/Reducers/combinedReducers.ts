import {combineReducers} from '@reduxjs/toolkit';
import systemReducer from './systemReducer';
import keyReducer from './keyReducer';

export const combinedReducers = combineReducers({
  system: systemReducer,
  key: keyReducer,
});
