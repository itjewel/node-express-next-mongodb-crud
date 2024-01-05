import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { todosSlice } from './features/todos/todosSlice'
import { productsAPI } from './features/products/productsSlice'

export const store = configureStore({
  reducer: {
    [todosSlice.reducerPath]: todosSlice.reducer,
    [productsAPI.reducerPath]: productsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosSlice.middleware, productsAPI.middleware),
})

setupListeners(store.dispatch);
