import { createSlice } from '@reduxjs/toolkit';

const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    user: null,
    token: null
  },
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logoutSuccess(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { loginSuccess, logoutSuccess } = sessionSlice.actions;

export default sessionSlice.reducer;
