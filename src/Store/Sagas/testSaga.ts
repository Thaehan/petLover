import {delay, takeEvery, takeLatest} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

export function* log(action: PayloadAction) {
  yield delay(1000);
  console.log('Log', action);
}

export function* testSaga() {
  console.log('Test saga');

  yield takeLatest('*', log);
}
