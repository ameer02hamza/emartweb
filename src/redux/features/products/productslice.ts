import { productType } from "@/interfaces/card.type";
import { createSlice } from "@reduxjs/toolkit";

interface productStateType {
    products: productType[],
    loading: boolean,
}
const initState: productStateType = {
    products: [],
    loading: true,
}

const productSlice = createSlice({
    initialState: initState,
    name: "products",
    reducers: {
        setProducts: (state, action) => {
            state.loading = true;
            state.products = action.payload
            state.loading = false;

        }
    },

})

export const { setProducts } = productSlice.actions;
export default productSlice;