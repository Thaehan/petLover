import {all} from 'redux-saga/effects';
import {watchFetchUser} from './testSaga';

// Root saga kết hợp các saga con
export default function* rootSaga() {
  yield all([watchFetchUser()]);
}
