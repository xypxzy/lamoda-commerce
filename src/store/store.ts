import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice.ts'
import {productsApi} from "./products/productsApi.ts";
import {usersApi} from "./users/usersApi.ts";
import productsReducer from "./products/productsSlice.ts";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        products: productsReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware).concat(usersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch