import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps, SortType } from "../../consts/consts.ts";

interface InitialStateProps {
  items: ProductProps[];
  searchResults: ProductProps[];
  sortedType: SortType;
}

const initialState: InitialStateProps = {
  items: [],
  searchResults: [],
  sortedType: { name: "rel" },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductProps[]>) => {
      state.items = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<ProductProps[]>) => {
      state.searchResults = action.payload;
    },
    setSortedType: (state, action: PayloadAction<SortType>) => {
      state.sortedType = action.payload;
    },
  },
});

export const { setProducts, setSearchResults, setSortedType } =
  productsSlice.actions;

export default productsSlice.reducer;
