import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ProductProps} from "../../consts/consts.ts";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://team2back.sanarip.org' }),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductProps[], string>({
            query: () => '/products/product'
        }),
        getProduct: builder.query<ProductProps, string>({
            query: (id: string) => `/products/product/${id}`
        }),
        addProduct: builder.mutation({
            query: (body) => ({
                url: `/products/product/`,
                method: 'POST',
                body
            })
        }),
        getNewProducts: builder.query<ProductProps[], number>({
            query: (limit: number) => `/products/product?limit=${limit}`
        }),
    }),
})


export const {useGetProductsQuery, useGetProductQuery, useAddProductMutation, useGetNewProductsQuery} = productsApi;
