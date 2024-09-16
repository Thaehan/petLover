import {all} from 'redux-saga/effects';

import {testSaga} from './testSaga';

// Root saga kết hợp các saga con
export default function* rootSaga() {
  console.log('root saga');

  yield all([testSaga()]);
}
