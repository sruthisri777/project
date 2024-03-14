import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./features/counter/CounterSlice"
import authReducer from './features/auth/AuthSlice'
export default configureStore({
  reducer: {
    counter:counterReducer,
    auth:authReducer
  },
})