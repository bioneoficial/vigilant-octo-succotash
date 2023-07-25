/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "../store";
import { PrivacyItem, PrivacyState } from "@/types/types";
import { delPrivacy } from "@/api/privacy";


const initialState: PrivacyState = {
  item: null,
};

export const privacySlice = createSlice({
  name: "privacy",
  initialState,
  reducers: {
    setPrivacyItem: (state, action: PayloadAction<PrivacyItem | null>) => {
      state.item = action.payload;
    },
  },
});

export const { setPrivacyItem } = privacySlice.actions;

export const selectPrivacyItem = (state: RootState): PrivacyItem | null =>
  state.privacy.item;

export const deletePrivacyItem = (
    token: string,
    id: number,
    sucess: (message: string) => void,
    errorToast: (message: string) => void
  ): ((dispatch: AppDispatch) => Promise<AnyAction>) => async (dispatch) => { 
    try {
      await delPrivacy(token, id);
      dispatch(setPrivacyItem(null));
      sucess("Item deletado com sucesso");
    } catch (error) {
      console.error(error);
      errorToast("Erro ao deletar item");
    }
    return Promise.resolve({
      type: 'PRIVACY_ITEM_DELETED',
    });
  };

export default privacySlice.reducer;
