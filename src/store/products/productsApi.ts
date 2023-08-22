import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ProductProps} from "../../consts/consts.ts";

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8002' }),
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
    }),
})


export const {useGetProductsQuery, useGetProductQuery, useAddProductMutation} = productsApi;