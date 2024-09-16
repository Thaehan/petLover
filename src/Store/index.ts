import {
  applyMiddleware,
  configureStore,
  legacy_createStore,
} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import mmkvStorage from './mmkvStorage'; // Import instance MMKV
import combinedReducers from './Slices/combinedReducers';
import rootSaga from './Sagas/rootSaga';

const PERSIST_KEY = 'persist:root';
// Combine persist config with combined reducers
const persistedReducer = persistReducer(
  {
    key: 'root',
    whitelist: ['system', 'user', 'offlineData', 'testSaga'],
    storage: mmkvStorage,
  },
  combinedReducers,
);

// Init saga middleware
const sagaMiddleware = createSagaMiddleware();
// Init store

export const store = legacy_createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);

export const persistor = persistStore(store);

export const getStoreByKey = <T extends RootStateKey>(key: T) => {
  const storage: RootStateRaw = mmkvStorage.getMap(PERSIST_KEY);
  const resultStore: RootState[T] = JSON.parse(storage[key]);
  return resultStore;
};

// Get store type
export const configedStore = configureStore({
  reducer: combinedReducers,
  middleware: getDefaultMiddleWare =>
    getDefaultMiddleWare({thunk: true}).concat(sagaMiddleware),
});

//Run Saga
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof configedStore.getState>;
export type RootStateKey = keyof RootState;
export type RootStateRaw = {
  [k in RootStateKey]: string;
};
