import {configureStore, legacy_createStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';

import mmkvStorage from './mmkvStorage'; // Import instance MMKV
import {combinedReducers} from './Reducers/combinedReducers';

// Combine persist config with combined reducers
const persistedReducer = persistReducer(
  {
    key: 'root',
    whitelist: ['system', 'user'],
    storage: mmkvStorage,
  },
  combinedReducers,
);

// Init store
export const store = legacy_createStore(persistedReducer);

// Init persistor
export const persistor = persistStore(store);

export const getStoreByKey = <T extends RootStateKey>(key: T) => {
  const storage = mmkvStorage.getMap('persist:root') as RootStateRaw;
  const resultStore: RootState[T] = JSON.parse(storage[key]);
  return resultStore;
};

// Get store type
const typeStore = configureStore({reducer: combinedReducers});
export type RootState = ReturnType<typeof typeStore.getState>;
export type RootStateKey = keyof RootState;
export type RootStateRaw = {
  [k in RootStateKey]: string;
};
