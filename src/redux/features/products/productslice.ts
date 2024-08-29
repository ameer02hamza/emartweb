import { productType } from "@/interfaces/card.type";
import { createSlice } from "@reduxjs/toolkit";

interface productStateType {
  products: productType[];
  loading: boolean;
  searchTerm: "";
  filteredProducts: productType[];
}
const initState: productStateType = {
  products: [],
  loading: true,
  searchTerm: "",
  filteredProducts: [],
};

const productSlice = createSlice({
  initialState: initState,
  name: "products",
  reducers: {
    setProducts: (state, action) => {
      state.loading = true;
      state.products = action.payload;
      state.filteredProducts = action.payload;
      state.loading = false;
    },
    searchProducts: (state, action) => {
      state.searchTerm = action.payload;
      if (state.searchTerm === "") {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter((product) =>
          product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
      }
    },
  },
});

export const { setProducts, searchProducts} = productSlice.actions;
export default productSlice;
