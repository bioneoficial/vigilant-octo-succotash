import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { user, UserState } from "@/types/types";



const initialState: UserState = {
  users: [],
  selectedUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<user>) => {
      state.users.push(action.payload);
    }, 
    addUsers: (state, action: PayloadAction<user[]>) => {
      state.users.push(...action.payload);
    }, 
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    selectUser: (state, action: PayloadAction<number>) => {
      state.selectedUser = state.users.find((user) => user.id === action.payload) || null;
    },
    deselectUser: (state) => {
      state.selectedUser = null;
    },
    clearUsers: (state) => {
      state.users = [];
    },
  },
});

export const { addUser, addUsers, deleteUser, selectUser, deselectUser, clearUsers } = userSlice.actions;

export const selectUsers = (state: RootState): user[] => state.user.users;

export const selectSelectedUser = (state: RootState): user | null => state.user.selectedUser;

export default userSlice.reducer;