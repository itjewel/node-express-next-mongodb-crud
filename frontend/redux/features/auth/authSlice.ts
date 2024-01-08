// features/authSlice.js
import Cookies from 'js-cookie';  // Use 'import Cookies from 'js-cookie'' instead of '* as Cookies'

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      // console.log(action.payload)
      Cookies.set('token', action.payload);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove('token');  // Remove the 'token' cookie when logging out
    },
  },
});

export const { setUser, setToken, logout } = authSlice.actions;

export default authSlice.reducer;
