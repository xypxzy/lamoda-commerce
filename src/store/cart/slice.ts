import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItems, CartSliceState } from "./types";

const initialState: CartSliceState = {
  cartItems: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItems>) => {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.cartItems.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
    },
    minusItem(state, action: PayloadAction<number>) {
      const findItem = state.cartItems.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = state.cartItems.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
    },
  },
});

export const { addItem, minusItem } = cartSlice.actions;
export default cartSlice.reducer;
