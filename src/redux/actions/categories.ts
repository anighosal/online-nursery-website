// actions/categoryActions.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import baseApi from "../api/baseApi";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await baseApi.get("/categories");
    return response.data;
  }
);
