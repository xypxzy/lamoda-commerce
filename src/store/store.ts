import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice.ts'
import {productsApi} from "./products/productsApi.ts";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch