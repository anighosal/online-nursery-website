// src/redux/reducers/productReducer.ts
import { IProduct } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
} from "../actions/productActions";

interface ProductState {
  products: IProduct[];
  filteredProducts: IProduct[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  searchQuery: string;
  categoryFilter: string;
}

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  status: "idle",
  error: null,
  searchQuery: "",
  categoryFilter: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    search(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      state.filteredProducts = state.products.filter((product: IProduct) =>
        product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
    filter(state, action: PayloadAction<string>) {
      state.categoryFilter = action.payload;
      state.filteredProducts = state.products.filter(
        (product) => product.category === state.categoryFilter
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<IProduct[]>) => {
          state.status = "succeeded";
          state.products = action.payload;
          state.filteredProducts = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch products";
      })
      .addCase(addProduct, (state, action: PayloadAction<IProduct>) => {
        state.products.push(action.payload);
        state.filteredProducts.push(action.payload);
      })
      .addCase(updateProduct, (state, action: PayloadAction<IProduct>) => {
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
          state.filteredProducts[index] = action.payload;
        }
      })
      .addCase(deleteProduct, (state, action: PayloadAction<number>) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
        state.filteredProducts = state.filteredProducts.filter(
          (product) => product.id !== action.payload
        );
      });
  },
});

export const { search, filter } = productSlice.actions;

export default productSlice.reducer;
