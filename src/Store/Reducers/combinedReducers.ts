import {combineReducers} from '@reduxjs/toolkit';
import systemReducer from './systemReducer';
import keyReducer from './keyReducer';
import userReucer from './userReducer';

export const combinedReducers = combineReducers({
  system: systemReducer,
  key: keyReducer,
  user: userReucer,
});
