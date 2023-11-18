import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userRTK } from './userRTK/userRTK'

export const store = configureStore({
  reducer: {
    [userRTK.reducerPath]: userRTK.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userRTK.middleware),
})

setupListeners(store.dispatch)