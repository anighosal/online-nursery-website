// src/redux/actions/productActions.ts
import { IProduct } from "@/types/types";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("/data/products.json");
    const data: IProduct[] = await response.json();
    return data;
  }
);

export const searchProducts = (query: string) => ({
  type: "products/search",
  payload: query,
});

export const filterProducts = (category: string) => ({
  type: "products/filter",
  payload: category,
});

export const addProduct = createAction<IProduct>("products/add");
export const updateProduct = createAction<IProduct>("products/update");
export const deleteProduct = createAction<number>("products/delete");
