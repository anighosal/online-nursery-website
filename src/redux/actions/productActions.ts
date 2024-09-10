// actions/productActions.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import baseApi from "../api/baseApi";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await baseApi.get("/products");
    return response.data;
  }
);
