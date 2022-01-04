import { createAction, createReducer } from '@reduxjs/toolkit';
import { AuthState } from '../../interfaces/redux/AuthState';

const login = createAction<AuthState>('auth/login');
const logout = createAction('auth/logout');
const reauth = createAction('auth/reauth');

const initialState = { login: '', senha: '', token: '', reauth: false };

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => ({
      ...state,
      login: action.payload.login,
      senha: action.payload.senha,
      token: action.payload.token,
    }))
    .addCase(logout, (state) => ({
      ...state,
      login: '',
      senha: '',
      token: '',
      reauth: false,
    }))
    .addCase(reauth, (state) => ({
      ...state,
      reauth: true,
    }))
    .addDefaultCase((state) => (state))
});

export default authReducer;