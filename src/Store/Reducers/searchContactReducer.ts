import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type SearchContactState = {
  searchText: string;
  readyToRefetch: boolean;
};

const initialState: SearchContactState = {
  searchText: '',
  readyToRefetch: true,
};

export const searchContactSlice = createSlice({
  name: 'searchContact',
  initialState: initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setReadyToRefetch: (state, action: PayloadAction<boolean>) => {
      state.readyToRefetch = action.payload;
    },
  },
});

export const {setSearchText, setReadyToRefetch} = searchContactSlice.actions;

export default searchContactSlice.reducer;
