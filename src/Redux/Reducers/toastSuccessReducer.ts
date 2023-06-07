import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const initialState = {
  active: false,
};

export const toastSuccessSlicer = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setToastSuccess: (state, action: PayloadAction<boolean>) => {
      state.active = action.payload;
    },
  },
});

export const { setToastSuccess } = toastSuccessSlicer.actions;

export const getToastSuccess = (state: RootState): boolean => state.toastSuccess.active;

export default toastSuccessSlicer.reducer;
