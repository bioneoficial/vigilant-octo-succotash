import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
  isOpen: boolean;
};

const initialState: ModalState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const selectModalIsOpen = (state: { modal: ModalState }): boolean =>
  state.modal.isOpen;

export default modalSlice.reducer;
