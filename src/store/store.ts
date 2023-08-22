import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice.ts'
import {productsApi} from "./products/productsApi.ts";
import { authApi } from './auth/authApi.ts'; 
import authReduser from '../store/auth/authSlice.ts'
import {usersApi} from "./users/usersApi.ts";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: authReduser,
        [productsApi.reducerPath]: productsApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware).concat(usersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch