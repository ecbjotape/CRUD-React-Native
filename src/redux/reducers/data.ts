import { createAction, createReducer } from '@reduxjs/toolkit';
import { AuthState } from '../../interfaces/redux/AuthState';

const login = createAction<AuthState>('auth/login');
const logout = createAction('auth/logout');

const initialState = { cns: '', password: '', token: '', id: '', };

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => ({
      ...state,
      cns: action.payload.token,
      
    }))
    .addCase(logout, (state) => ({
      ...state,
      cns: '',
      password: '',
      token: '',
      id: '',
    }));
});

export default authReducer;