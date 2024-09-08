import { configureStore } from "@reduxjs/toolkit";
import rootReucers from "../features/root.reducer";
import { counterSlice } from "../features/counter/counterSlice";
import productSlice from "../features/products/productslice";
import cartSlice from "../features/cart/cartSlice";
import loginSlice from "../features/auth/login.slice";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    products: productSlice.reducer,
    counter: counterSlice.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
