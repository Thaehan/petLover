import {createSlice} from '@reduxjs/toolkit';

type TestSagaState = {
  loading?: boolean;
  user?: any;
  error?: any;
};

const initialState: TestSagaState = {
  loading: false,
  user: undefined,
  error: undefined,
};

export const testSagaSlice = createSlice({
  name: 'testSaga',
  initialState: initialState,
  reducers: {
    //Test saga
    fetchUserRequest: state => {
      state.loading = true;
    },
    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    fetchUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchUserRequest, fetchUserSuccess, fetchUserFailure} =
  testSagaSlice.actions;

export default testSagaSlice.reducer;
