import {combineReducers} from '@reduxjs/toolkit';
import system from './systemReducer';
import user from './userReducer';
import searchContact from './searchContactReducer';
import offlineData from './offlineDataReducer';

export const combinedReducers = combineReducers({
  system,
  user,
  searchContact,
  offlineData,
});
