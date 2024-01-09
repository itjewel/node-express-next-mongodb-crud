// features/apiSlice.ts
import Cookies from 'js-cookie';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { selectToken, selectRoles } from '@/redux/features/auth/authSlice';

const baseUrl = 'http://localhost:5000/api/users';
const baseQuery = fetchBaseQuery({ baseUrl });


export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = Cookies.get('token'); // Retrieve the token from the cookie
     // const roles = selectRoles(getState()); // Optionally retrieve roles if needed

      // Set the Authorization header if a token is available
      if (token) {
        headers.set('Authorization', `${token}`);
      }

      // You can include additional headers or logic here if needed

      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Assuming this is part of your RTK Query setup
    login: builder.mutation({
      query: (credentials) => {
        const userRoles = credentials.role;
        const { role, ...updatedCredentials } = credentials;
       // console.log('Credentials:', updatedCredentials); // Log credentials
        let endpoint;
        switch (userRoles) {
          case 'administrator':
            endpoint = '/login-administrator';
            break;
         case 'supervisor':
            endpoint = '/login-supervisor';
            break;
          default:
            endpoint = '/login-employee';
            break;
        }
        return {
          url: endpoint,
          method: 'POST',
          body: updatedCredentials,
        };
      },
    }),

    // another query
    checkAuth: builder.query<any, string>({
      query: (token) => `check-auth`,
    }),

    // Add other endpoints if needed
  }),
});

export const { useLoginMutation, useCheckAuthQuery  } = api;


