import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {TContact} from '@Api/ContactApi';

type OfflineDataState = {
  contacts: Array<TContact>;
};

const initialState: OfflineDataState = {
  contacts: [],
};

export const offlineDataSlice = createSlice({
  name: 'offlineData',
  initialState: initialState,
  reducers: {
    setContacts: (state, action: PayloadAction<Array<TContact>>) => {
      state.contacts = action.payload;
    },
  },
});

export const {setContacts} = offlineDataSlice.actions;

export default offlineDataSlice.reducer;
