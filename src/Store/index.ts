import {configureStore, legacy_createStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';

import mmkvStorage from './mmkvStorage'; // Import instance MMKV
import {combinedReducers} from './Reducers/combinedReducers';

// Combine persist config with combined reducers
const persistedReducer = persistReducer(
  {
    key: 'root',
    whitelist: ['system'],
    storage: mmkvStorage,
  },
  combinedReducers,
);

// Init store
const store = legacy_createStore(persistedReducer);

// Init persistor
const persistor = persistStore(store);

// Get store type
const typeStore = configureStore({reducer: combinedReducers});

export {store, persistor};
export type IRootState = ReturnType<typeof typeStore.getState>;
