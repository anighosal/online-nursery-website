// src/app/api.ts

import { ICategory, IProduct } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),

  endpoints: (builder) => ({
    fetchCategories: builder.query<ICategory[], void>({
      query: () => "/public/data.json",
    }),
    fetchProducts: builder.query<IProduct[], void>({
      query: () => "/public/data.json",
      transformResponse: (response: { products: IProduct[] }) =>
        response.products,
    }),
    fetchProductById: builder.query<IProduct, string>({
      query: (id: string) => `/public/data.json/products/${id}`,
    }),
  }),
});

export const {
  useFetchCategoriesQuery,
  useFetchProductsQuery,
  useFetchProductByIdQuery,
} = baseApi;
