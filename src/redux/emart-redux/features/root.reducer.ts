import { combineReducers } from "@reduxjs/toolkit";
import {counterSlice} from "./counter/counterSlice";

const rootReucers = combineReducers({
    counterReducer: counterSlice.reducer
})
export default rootReucers;