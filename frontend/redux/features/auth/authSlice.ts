// features/authSlice.js
import Cookies from 'js-cookie';  // Use 'import Cookies from 'js-cookie'' instead of '* as Cookies'

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    roles: null,
    token: null,
  },
  reducers: {
    setRoles: (state, action) => {
      Cookies.set('roles', action.payload);
    },
    setToken: (state, action) => {
      Cookies.set('token', action.payload);
    },
    logout: (state) => {
      state.roles = null;
      state.token = null;
      Cookies.remove('token');  // Remove the 'token' cookie when logging out
    },
  },
});

export const { setRoles, setToken, logout } = authSlice.actions;
export const selectRoles = (state: { auth: { roles: any; }; }) =>  Cookies.get('roles');
export const selectToken = (state: { auth: { token: any; }; }) => Cookies.get('token');

export default authSlice.reducer;
