import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type UserState = {
  accessToken?: string;
  refreshToken?: string;
};

const initialState: UserState = {
  accessToken: '',
  refreshToken: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
});

export const {setUser, setAccessToken, setRefreshToken} = userSlice.actions;

export default userSlice.reducer;
