// authApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export interface LoginData {
    username: string;
    password: string;
  }
  
const baseUrl = 'http://localhost:5000/api/users'; 
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // Adjust the base URL as needed
  endpoints: (builder) => ({
    employeeLogin: builder.mutation<any, LoginData>({
      query: (data) => ({ url: '/employee-login', method: 'POST', body: data }),
    }),
    supervisorLogin: builder.mutation<any, LoginData>({
      query: (data) => ({ url: '/supervisor-login', method: 'POST', body: data }),
    }),
    administratorLogin: builder.mutation<any, LoginData>({
      query: (data) => ({ url: '/administrator-login', method: 'POST', body: data }),
    }),
  }),
});

export const { useEmployeeLoginMutation, useSupervisorLoginMutation, useAdministratorLoginMutation } = authApi;

