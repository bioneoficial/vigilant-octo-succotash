import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse, User } from '@/types/types';
import { UserRole } from '@/utils/enums';

type SessionState = {
  user: User,
  token: null | string,
};

const initialState: SessionState = {
    token: null,
    user: {
      id: 0,
      nome: '',
      email: '',
      role: UserRole.empty,
      fotoPath: '',
      ativo: 0,
      data_validade_assinatura: '',
    }
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
        state.user = initialState.user;
        state.token = null;
        localStorage.removeItem('funktoonToken');
        sessionStorage.removeItem('funktoonToken');
      },
    // Add other reducers as per your needs
  },
});

export const { loginSuccess, logout } = sessionSlice.actions;

export default sessionSlice.reducer;
