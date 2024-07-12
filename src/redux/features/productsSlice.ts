// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { RootState } from "./store";
// import { fetchProductsApi } from "../api";

// interface Product {
//   id: string;
//   image: string;
//   title: string;
//   price: number;
//   category: string;
// }

// interface ProductsState {
//   products: Product[];
//   status: "idle" | "loading" | "succeeded" | "failed";
//   error: string | null;
// }

// const initialState: ProductsState = {
//   products: [],
//   status: "idle",
//   error: null,
// };

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     const response = await fetchProductsApi();
//     return response.data;
//   }
// );

// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.products = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export const selectProducts = (state: RootState) => state.products.products;

// export default productsSlice.reducer;
