import { modalTypeEnum } from "@/utils/enums";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ModalState = {
  isOpen: boolean;
  modalType: modalTypeEnum;
};

const initialState: ModalState = {
  isOpen: false,
  modalType: modalTypeEnum.empty,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<modalTypeEnum>) {
      state.isOpen = true;
      state.modalType = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const selectModal = (state: { modal: ModalState }): ModalState =>
  state.modal;

export default modalSlice.reducer;
