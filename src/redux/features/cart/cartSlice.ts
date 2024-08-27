import { productType } from "@/interfaces/card.type";
import { createSlice } from "@reduxjs/toolkit";

interface cartStateType {
    products: productType[],
    opDone: boolean,
    totalPrice: number
}

const initState: cartStateType = {
    products: [],
    opDone: false,
    totalPrice: 0
}

const cartSlice = createSlice({
    initialState: initState,
    name: "cart",
    reducers: {
        addToCart: (state, action) => {
            var newItem: productType = action.payload;
            var itemIndex = state.products.findIndex(product => product.id === newItem.id);
            if (itemIndex > -1) {
                state.products[itemIndex].quantity += 1;
            }
            else {
                const obj = { ...newItem, quantity: 1 };
                state.products.push(obj);
            }
            state.totalPrice += action.payload.price;
            state.opDone = true;
        },
        removeFromCart: (state, action) => {
            console.log(action.payload.quantity);
            if(action.payload.quantity>1){
                state.products[state.products.findIndex(product => product.id === action.payload.id)].quantity -= 1;
            }
            else{
                state.products = state.products.filter(product => product.id !== action.payload.id);
            }
            state.totalPrice -= action.payload.price;
            state.opDone = true;
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice;