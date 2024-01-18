// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const todosSlice = createApi({
  reducerPath: 'todosSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/users' }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => `/profile`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodosQuery } = todosSlice