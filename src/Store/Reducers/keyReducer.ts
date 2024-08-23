import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type KeyState = {
  key: string;
};

const initialState: KeyState = {
  key: '',
};

export const keySlice = createSlice({
  name: 'key',
  initialState: initialState,
  reducers: {
    setKey: (state, action: PayloadAction<string>) => {
      state.key = action.payload;
    },
  },
});

export const {setKey} = keySlice.actions;

export default keySlice.reducer;
