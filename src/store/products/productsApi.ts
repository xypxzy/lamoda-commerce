import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'http::/localhost:8002/' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products/product'
        })
    }),
})


export const {useGetProductsQuery} = productsApi;