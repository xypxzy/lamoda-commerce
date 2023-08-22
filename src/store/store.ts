import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice.ts";
import cartReducer from "./cart/slice.ts";
import { productsApi } from "./products/productsApi.ts";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
