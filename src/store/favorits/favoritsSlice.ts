import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItems, FavSliceState } from "../cart/types";
import { activate } from "firebase/remote-config";

const favCardData = sessionStorage.getItem('favData');
const initialFavItem: CartItems[] = favCardData ? JSON.parse(favCardData) : [];

const initialState: FavSliceState = {
    favItems: initialFavItem.map(item => ({...item, isSelected: true}))
}

export const favSlice = createSlice({
    name: 'fav',
    initialState,
    reducers: {
        addFav: (state, action: PayloadAction<CartItems>) => {
            const existingItem = state.favItems.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.count += action.payload.count;
            } else {
            state.favItems.push({
                ...action.payload,
                count: 1,
            });
            }
            state.favItems.reduce((acc, item) => {
                return acc + item.price * item.count;
              }, 0);
            sessionStorage.setItem("favData", JSON.stringify(state.favItems));
        },
        minusFav(state, action: PayloadAction<number>){
            const findItem = state.favItems.find((item) => item.id === action.payload);
            if (findItem) {
                findItem.count--;
            }
            sessionStorage.setItem("favData", JSON.stringify(state.favItems));

        },
        removeFav: (state, action: PayloadAction<number>) => {
            const indexToRemove = state.favItems.findIndex(item => item.id === action.payload);
            if (indexToRemove !== -1) {
                state.favItems = state.favItems.filter(item => item.id !== action.payload);
            }
            sessionStorage.setItem("favData", JSON.stringify(state.favItems));
        },
        addToCard: (state, action: PayloadAction<number>) => {
            const indexToRemoveFav = state.favItems.findIndex(item => item.id === action.payload);
            sessionStorage.setItem("cartData", JSON.stringify(state.favItems));
            if (indexToRemoveFav !== -1) {
                state.favItems = state.favItems.filter(item => item.id !== action.payload);
            }
            sessionStorage.setItem("favData", JSON.stringify(state.favItems));
        }
    }
})

export const {addFav, minusFav, removeFav, addToCard} = favSlice.actions;
export default favSlice.reducer
