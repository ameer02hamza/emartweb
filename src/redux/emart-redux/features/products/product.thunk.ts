
import { epProduct } from "@/consts/emart/apiendpoints.const";
import apiInstance from "@/services/emart-services/apiagent.interceptor";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const productsThunk = createAsyncThunk("get/products", async () => {
  try {
    const response= await apiInstance.get(epProduct);  
    return response;
  } catch (error) {
    console.error(error);
  }
});
