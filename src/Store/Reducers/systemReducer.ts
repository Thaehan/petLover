import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TLanguageResourceKey} from '@Translations/Languages';

type SystemState = {
  language: TLanguageResourceKey;
  showIntro: boolean;
  deviceToken: string;
};

const initialState: SystemState = {
  language: 'vi',
  showIntro: true,
  deviceToken: '',
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
    setLanguage: (state, action: PayloadAction<'en' | 'vi'>) => {
      state.language = action.payload;
    },
    setShowIntro: (state, action: PayloadAction<boolean>) => {
      state.showIntro = action.payload;
    },
  },
});

export const {setSystem, setDeviceToken, setLanguage, setShowIntro} =
  systemSlice.actions;

export default systemSlice.reducer;
