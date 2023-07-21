import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CookieBannerState {
  showBanner: boolean;
}

const initialState: CookieBannerState = {
  showBanner: false,
};

export const cookieBannerSlice = createSlice({
  name: "cookieBanner",
  initialState,
  reducers: {
    setShowBanner: (state, action: PayloadAction<boolean>) => {
      state.showBanner = action.payload;
    },
  },
});

export const { setShowBanner } = cookieBannerSlice.actions;

export default cookieBannerSlice.reducer;
