export type CartItems = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  count: number;
  isSelected?: boolean;
};

export interface CartSliceState {
  totalPrice: number;
  cartItems: CartItems[];
}

export interface FavSliceState {
  favItems: CartItems[];
}
