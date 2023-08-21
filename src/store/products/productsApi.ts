import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {ProductProps} from "../../consts/consts.ts";

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8002' }),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductProps[], string>({
            query: () => '/products/product'
        })
    }),
})


export const {useGetProductsQuery} = productsApi;