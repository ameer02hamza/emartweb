import { epProduct } from "@/consts/apiendpoints.const";
import { ProductsType } from "@/interfaces/product.type";
import apiInstance from "@/services/apiagent.interceptor";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const productsThunk = createAsyncThunk("get/products", async () => {
  try {
    const response= await apiInstance.get(epProduct);  
    return response;
  } catch (error) {
    console.error(error);
  }
});
