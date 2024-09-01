import { epLogin } from "@/consts/apiendpoints.const";
import { LoginResponse, LoginType } from "@/interfaces/auth.type";
import apiInstance from "@/services/apiagent.interceptor";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk(
  "post/login",
  async (login: LoginType) => {
    try {
      console.log("called the values");

      const response: LoginResponse = await apiInstance.post(epLogin, login);
      console.log(response, "thinks");
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);
