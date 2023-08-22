import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductProps} from "../../consts/consts.ts";

interface InitialStateProps {
    items: ProductProps[];
    searchResults: ProductProps[];
}

const initialState: InitialStateProps = {
    items: [],
    searchResults: [],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductProps[]>) => {
            state.items = action.payload;
        },
        setSearchResults: (state, action: PayloadAction<ProductProps[]>) => {
            state.searchResults = action.payload;
        },
    },
});

export const {setProducts, setSearchResults} = productsSlice.actions;

export default productsSlice.reducer;

