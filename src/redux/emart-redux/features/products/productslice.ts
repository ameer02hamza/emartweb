import { createSlice } from "@reduxjs/toolkit";
import { productsThunk } from "./product.thunk";
import { productInitState, ProductsType } from "@/interfaces/emart/product.type";
import { thunkStatus } from "@/consts/emart/const.values";

interface productStateType {
  products: ProductsType[];
  detailProduct: ProductsType;
  status: thunkStatus;
  searchTerm: "";
  filteredProducts: ProductsType[];
}
const initState: productStateType = {
  products: [],
  detailProduct: productInitState,
  status: thunkStatus.initial,
  searchTerm: "",
  filteredProducts: [],
};

const productSlice = createSlice({
  initialState: initState,
  name: "products",
  reducers: {
    setProducts: (state, action) => {
      state.detailProduct = action.payload;
      state.status = thunkStatus.initial;
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
  extraReducers: (builder) => {
    builder.addCase(productsThunk.pending, (state, action) => {
      state.status = thunkStatus.loading;
    }),
      builder.addCase(productsThunk.fulfilled, (state, action) => {
        const product = action.payload as any;
        state.products = product["products"];
        state.filteredProducts = product["products"];
        state.status = thunkStatus.fulfilled;
      }),
      builder.addCase(productsThunk.rejected, (state, action) => {
        console.log("rejected", action.payload);
        state.status = thunkStatus.rejected;
        state.status = thunkStatus.rejected;
      });
  },
});

export const { setProducts, searchProducts } = productSlice.actions;
export default productSlice;
