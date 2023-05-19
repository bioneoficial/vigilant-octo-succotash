import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Stamps } from '@/types/types'
import { RootState } from '../store';

interface StampState {
    currentStamp: Stamps | null;
  }

const initialState: StampState = {
    currentStamp: null
}

const stampSlice = createSlice({
    name: 'stamp',
    initialState,
    reducers: {
      setStamp: (state, action: PayloadAction<Stamps | null>) => {
        state.currentStamp = action.payload;
      },
      clearStamp: state => {
        state.currentStamp = null;
      },
    },
  })

export const { setStamp, clearStamp } = stampSlice.actions;

export const selectStamp = (state: RootState): Stamps | null =>
   state.stamp.currentStamp
  ;
export default stampSlice.reducer
