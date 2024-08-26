import { configureStore } from '@reduxjs/toolkit'
import rootReucers from '../features/root.reducer'
import { counterSlice } from '../features/counter/counterSlice'
import productSlice from '../features/products/productslice'

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    counter: counterSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch