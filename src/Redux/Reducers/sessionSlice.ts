import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse } from '@/types/types';

type SessionState = {
  user: null | object,
  token: null | string,
};

const initialState: SessionState = {
  user: null,
  token: null,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<LoginResponse>) {
      const { user, token } = action.payload;

      state.user = user;
      state.token = token;

      if (action.payload.stayConnected) {
        localStorage.setItem("funktoonToken", JSON.stringify({ user, token }));
      } else {
        sessionStorage.setItem("funktoonToken", JSON.stringify({ user, token }));
      }
    },
    logout(state) {
        state.user = null;
        state.token = null;
        localStorage.removeItem('funktoonToken');
        sessionStorage.removeItem('funktoonToken');
      },
    // Add other reducers as per your needs
  },
});

export const { loginSuccess, logout } = sessionSlice.actions;

export default sessionSlice.reducer;
