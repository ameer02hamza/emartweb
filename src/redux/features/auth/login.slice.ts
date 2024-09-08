import { LoginResponse, LoginType } from "@/interfaces/auth.type";
import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./auth.thunk";
import { thunkStatus } from "@/consts/const.values";

interface AuthType {
  authResponse: LoginResponse;
  status: thunkStatus;
  error: string | null;
}
const initialState: AuthType = {
  authResponse: {
    token: "",
    refreshToken: "",
    id: 0,
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    image: "",
  },
  status: thunkStatus.initial,
  error: null,
  // Add any other necessary state properties here
};

const loginSlice = createSlice({
  initialState,
  name: "login",
  reducers: {
    logout: (state) => {
      state.authResponse = {
        token: "",
        refreshToken: "",
        id: 0,
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        gender: "",
        image: "",
      };
      state.status = thunkStatus.initial;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.status = thunkStatus.loading;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.authResponse = action.payload as LoginResponse;
        state.status = thunkStatus.fulfilled;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.status = thunkStatus.rejected;
        state.error = action.error.message ?? "Unknown Error";
      });
  },
});
export const {logout} = loginSlice.actions;
export default loginSlice;
