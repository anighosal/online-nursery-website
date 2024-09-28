import { ICategory, IOrder, IProduct } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<
      {
        products: IProduct[];
        currentPage: number;
        totalPages: number;
        totalProducts: number;
      },
      {
        page: number;
        limit: number;
        sort: string;
        order: string;
        category?: string;
        search?: string;
      }
    >({
      query: ({ page, limit, sort, order, category, search }) =>
        `/products?page=${page}&limit=${limit}&sort=${sort}&order=${order}${
          category ? `&category=${category}` : ""
        }${search ? `&search=${search}` : ""}`,
      providesTags: (result) =>
        result
          ? [
              ...result.products.map(
                ({ id }) =>
                  ({
                    type: "Products",
                    id,
                  } as const)
              ),
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
    }),

    getProductById: builder.query<IProduct, string>({
      query: (id) => `/products/${id}`,
    }),
    getCategories: builder.query<ICategory[], void>({
      query: () => "/categories",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ name }) => ({
                type: "Categories" as const,
                id: name,
              })),
              { type: "Categories" as const, id: "LIST" },
            ]
          : [{ type: "Categories" as const, id: "LIST" }],
    }),
    getProductsByCategoryName: builder.query<IProduct[], string>({
      query: (categoryName) =>
        `/categories?name=${encodeURIComponent(categoryName)}`,
      transformResponse: async (response: ICategory[], _meta, arg) => {
        const category = response.find((cat) => cat.name === arg);
        if (category) {
          return category.products as IProduct[];
        } else {
          throw new Error(`Category ${arg} not found`);
        }
      },
      providesTags: (_result, _error, arg) => [
        { type: "Products" as const, id: "LIST" },
        { type: "Products" as const, id: arg },
      ],
    }),
    updateProduct: builder.mutation<IProduct, Partial<IProduct>>({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: [{ type: "Products", id: "LIST" }],
    }),

    deleteProduct: builder.mutation<void, string>({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, productId) => [
        { type: "Products", id: productId },
        { type: "Products", id: "LIST" },
      ],
    }),
    addProduct: builder.mutation<IProduct, Partial<IProduct>>({
      query: (newProduct) => ({
        url: "/products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: [{ type: "Products", id: "LIST" }],
    }),

    searchProductsAndCategories: builder.query({
      query: (searchTerm) => `/products/search?query=${searchTerm}`,
    }),

    placeOrder: builder.mutation<IOrder, Partial<IOrder>>({
      query: (newOrder) => ({
        url: "/orders",
        method: "POST",
        body: newOrder,
      }),
      invalidatesTags: [{ type: "Orders", id: "LIST" }],
    }),
  }),
  tagTypes: ["Products", "Categories", "Orders"],
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useGetCategoriesQuery,
  useGetProductsByCategoryNameQuery,
  useUpdateProductMutation,
  useSearchProductsAndCategoriesQuery,
  useDeleteProductMutation,
  usePlaceOrderMutation,
} = baseApi;

export default baseApi;
