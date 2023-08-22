import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItems, CartSliceState } from "./types";

const initialState: CartSliceState = {
  cartItems: [
    {
      id: 1,
      title: "Product Name",
      price: 19.99,
      imageUrl:
        "https://www.sephora.com/productimages/sku/s2421519-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=150",
      count: 2,
    },
  ],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItems>) => {
      const { id } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
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
