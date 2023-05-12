import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { PrivacyItem } from "@/types/types";

interface PrivacyState {
  item: PrivacyItem | null;
}

const initialState: PrivacyState = {
  item: null,
};

export const privacySlice = createSlice({
  name: "privacy",
  initialState,
  reducers: {
    setPrivacyItem: (state, action: PayloadAction<PrivacyItem>) => {
      state.item = action.payload;
    },
  },
});

export const { setPrivacyItem } = privacySlice.actions;

export const selectPrivacyItem = (state: RootState): PrivacyItem | null =>
  state.privacy.item;

export default privacySlice.reducer;
