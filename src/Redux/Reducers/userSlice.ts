import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { user } from "@/types/types";

interface UserState {
  items: user[];
  selectedItem: user | null;
}

const initialState: UserState = {
  items: [],
  selectedItem: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<user>) => {
      state.items.push(action.payload);
    }, 
    deleteUser: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((user) => user.id !== action.payload);
    },
    selectUser: (state, action: PayloadAction<number>) => {
      state.selectedItem = state.items.find((user) => user.id === action.payload) || null;
    },
    deselectUser: (state) => {
      state.selectedItem = null;
    },
  },
});

export const { addUser, deleteUser, selectUser, deselectUser } = userSlice.actions;

export const selectUsers = (state: RootState): user[] => state.user.items;

export const selectSelectedUser = (state: RootState): user | null => state.user.selectedItem;

export default userSlice.reducer;