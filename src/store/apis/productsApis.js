// products CRUD
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `/products`,
        }),
        getProductsById: builder.query({
            query: (id) => `/products/${id}`
        })
    })
})

export const { useGetAllProductsQuery, useGetProductsByIdQuery } = productsApi;