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
        addProduct: (state, action: PayloadAction<ProductProps>) => {
            // Добавляем продукт в состояние
            state.items.push(action.payload);
        },
        setSearchResults: (state, action: PayloadAction<ProductProps[]>) => {
            state.searchResults = action.payload;
        },
    },
});

export const {addProduct, setSearchResults} = productsSlice.actions;

export default productsSlice.reducer;

