import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface UserPhotoState {
  fotoPath: string;
}

const initialState: UserPhotoState = {
  fotoPath: "",
};

const userPhotoSlice = createSlice({
  name: 'userPhoto',
  initialState,
  reducers: {
    updateFotoPath(state, action: PayloadAction<string>) {
      state.fotoPath = action.payload;
    },
  },
});


export const selectPhotoPath = (state: RootState): string =>
  state.userPhoto.fotoPath;
export const { updateFotoPath } = userPhotoSlice.actions;
export default userPhotoSlice.reducer;
