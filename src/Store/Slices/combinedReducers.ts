import {combineReducers} from '@reduxjs/toolkit';
import system from './systemSlice';
import user from './userSlice';
import searchContact from './searchContactSlice';
import offlineData from './offlineDataSlice';
import testSaga from './testSagaSlice';

export const combinedReducers = combineReducers({
  system,
  user,
  searchContact,
  offlineData,
  testSaga,
});
