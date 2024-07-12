// src/app/api.ts

import { ICategory, IProduct } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/", // Assuming your data.json is in the public folder
  }),

  endpoints: (builder) => ({
    fetchCategories: builder.query<ICategory[], void>({
      query: () => "/public/data.json", // Adjust path as needed
    }),
    fetchProducts: builder.query<IProduct[], void>({
      query: () => "/public/data.json", // Adjust path as needed
      transformResponse: (response: { products: IProduct[] }) =>
        response.products,
    }),
  }),
});

export const { useFetchCategoriesQuery, useFetchProductsQuery } = baseApi;
