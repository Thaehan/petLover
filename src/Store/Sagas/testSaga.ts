import {call, put, takeLatest} from 'redux-saga/effects';
import {
  fetchUserSuccess,
  fetchUserFailure,
  fetchUserRequest,
} from '../Slices/testSagaSlice';

// Hàm gọi API
async function fetchUserApi() {
  console.log('fetchUserApi');
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1',
    );
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
}

// Worker saga: xử lý side effect
function* fetchUserSaga() {
  console.log('fetchUserSaga');
  try {
    const user = yield call(fetchUserApi);
    console.log({user});
    yield put(fetchUserSuccess(user)); // Dispatch action khi thành công
  } catch (error) {
    yield put(fetchUserFailure(error.toString())); // Dispatch action khi thất bại
  }
}

// Watcher saga: lắng nghe action fetchUserRequest
export function* watchFetchUser() {
  console.log('watchFetchUser');
  console.log(fetchUserRequest.type);
  yield takeLatest(fetchUserRequest.type, fetchUserSaga);
}
