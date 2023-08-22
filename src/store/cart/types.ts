export type CartItems = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  cartItems: CartItems[];
}
