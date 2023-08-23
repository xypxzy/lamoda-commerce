import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItems, CartSliceState } from "./types";

const storedCartData = sessionStorage.getItem("cartData");
const initialCartItems: CartItems[] = storedCartData ? JSON.parse(storedCartData) : [];

const initialState: CartSliceState = {
  cartItems: initialCartItems.map(item => ({
    ...item,
    isSelected: true,
  })),
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItems>) => {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.count += action.payload.count;
      } else {
        state.cartItems.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.cartItems.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
      sessionStorage.setItem("cartData", JSON.stringify(state.cartItems));

    },
    minusItem(state, action: PayloadAction<number>) {
      const findItem = state.cartItems.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = state.cartItems.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
      sessionStorage.setItem("cartData", JSON.stringify(state.cartItems));
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const indexToRemove = state.cartItems.findIndex(item => item.id === action.payload);

      if (indexToRemove !== -1) {
        state.cartItems.splice(indexToRemove, 1);
        state.totalPrice = state.cartItems.reduce((acc, item) => {
          return acc + item.price * item.count;
        }, 0);
        sessionStorage.setItem("cartData", JSON.stringify(state.cartItems));
      }
    },
  },
});

export const { addItem, minusItem,removeItem } = cartSlice.actions;
export default cartSlice.reducer;
