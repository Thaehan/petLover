import {combineReducers} from '@reduxjs/toolkit';
import system from './systemSlice';
import user from './userSlice';
import searchContact from './searchContactSlice';
import offlineData from './offlineDataSlice';

export default combineReducers({
  system,
  user,
  searchContact,
  offlineData,
});
