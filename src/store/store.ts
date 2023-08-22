import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice.ts'
import {productsApi} from "./products/productsApi.ts";
import {usersApi} from "./users/usersApi.ts";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware).concat(usersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch