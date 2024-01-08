// features/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = 'http://localhost:5000/api/users';
const baseQuery = fetchBaseQuery({ baseUrl });


export const api = createApi({
  reducerPath: 'api',
  baseQuery,
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

    // Add other endpoints if needed
  }),
});

export const { useLoginMutation } = api;


