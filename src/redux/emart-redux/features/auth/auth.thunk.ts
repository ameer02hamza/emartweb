
import { epLogin } from "@/consts/emart/apiendpoints.const";
import { LoginResponse, LoginType } from "@/interfaces/emart/auth.type";
import apiInstance from "@/services/emart-services/apiagent.interceptor";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk(
  "post/login",
  async (login: LoginType) => {
    try {
      const response: LoginResponse = await apiInstance.post(epLogin, login);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);
