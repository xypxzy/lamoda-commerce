import { RootState } from "../store";

export const selectCart = (state: RootState) => state.cart;
export const cartItemsLength = (state: RootState) =>
  state.cart.cartItems.length;
