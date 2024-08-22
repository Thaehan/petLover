import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SystemState {
  language: string;
  showIntro: boolean;
  deviceToken: string;
  mode: 'online' | 'offline';
  count: number;
  text: string;
}

const initialState: SystemState = {
  language: 'vi',
  showIntro: true,
  deviceToken: '',
  mode: 'online',
  count: 0,
  text: '',
};

export const systemSlice = createSlice({
  name: 'system',
  initialState: initialState,
  reducers: {
    setSystem: (state, action: PayloadAction<SystemState>) => {
      state.language = action.payload.language;
      state.showIntro = action.payload.showIntro;
      state.deviceToken = action.payload.deviceToken;
    },
    setDeviceToken: (state, action: PayloadAction<string>) => {
      state.deviceToken = action.payload;
    },
    setMode: (state, action: PayloadAction<'online' | 'offline'>) => {
      state.mode = action.payload;
    },
    setLanguage: (state, action: PayloadAction<'en' | 'vi'>) => {
      state.language = action.payload;
    },
    setShowIntro: (state, action: PayloadAction<boolean>) => {
      state.showIntro = action.payload;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const {
  setSystem,
  setDeviceToken,
  setMode,
  setLanguage,
  setShowIntro,
  setCount,
  setText,
} = systemSlice.actions;

export default systemSlice.reducer;
