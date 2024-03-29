import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse, User } from '@/types/types';
import { UserRole } from '@/utils/enums';
import secureLocalStorage from 'react-secure-storage';

type SessionState = {
  user: User,
  token: null | string,
  stayConnected: boolean,
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
      descricao: '',
      data_validade_assinatura: '',
    },
    stayConnected: false,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<LoginResponse>) {
      const { user, token, stayConnected } = action.payload;

      state.user = user;
      state.token = token;
      state.stayConnected = stayConnected;

      if (action.payload.stayConnected) {
        secureLocalStorage.setItem("funktoonToken", { user, token });
      } else {
        secureLocalStorage.setItem("funktoonToken", { user, token });
      }
    },
    logout(state) {
        state.user = initialState.user;
        state.token = null;
        secureLocalStorage.removeItem('funktoonToken');
        secureLocalStorage.removeItem('funktoonToken');
      },
    // Add other reducers as per your needs
  },
});

export const { loginSuccess, logout } = sessionSlice.actions;

export default sessionSlice.reducer;
