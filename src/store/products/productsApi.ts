import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ProductProps, Compound} from "../../consts/consts.ts";
import {DEFAULT_URL} from "../const.ts";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: DEFAULT_URL }),
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
        getCompound: builder.query<Compound[], string>({
            query: (id: string) => `/products/compound/${id}`
        })
    }),
})


export const {useGetProductsQuery, useGetProductQuery, useAddProductMutation, useGetCompoundQuery} = productsApi;

