import {configureStore} from "@reduxjs/toolkit";
import {usersApi} from "./users/usersApi.ts";
import {productsApi} from "./products/productsApi.ts";
import {authApi} from "./auth/authApi.ts";

import cartReducer from "./cart/slice.ts";
import productsReducer from "./products/productsSlice.ts";
import authReducer from './auth/authSlice.ts'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    products: productsReducer,

    [productsApi.reducerPath]: productsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware).concat(usersApi.middleware).concat(authApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
