import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cupom } from '@/types/types'
import { RootState } from '../store';

interface CouponState {
    currentCoupon: cupom | null;
  }

const initialState: CouponState = {
  currentCoupon: null
}

const couponSlice = createSlice({
    name: 'coupon',
    initialState,
    reducers: {
      setCoupon: (state, action: PayloadAction<cupom | null>) => {
        state.currentCoupon = action.payload;
      },
      clearCoupon: state => {
        state.currentCoupon = null;
      },
    },
  })

export const { setCoupon, clearCoupon } = couponSlice.actions

export const selectCoupon = (state: RootState): cupom | null =>
  state.coupon.currentCoupon
  ;
export default couponSlice.reducer
