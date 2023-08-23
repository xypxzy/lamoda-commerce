
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8002/users/' }),
    endpoints: (builder) => ({
        addAuth: builder.mutation({
            query: (body) => ({
                url: 'register/',
                method: 'POST',
                body
            }),
        }),
        addToken:builder.mutation({
            query: (body) => ({
                url: 'token/',
                method: 'POST',
                body
            }),
        }),
    })
})

export const {
    useAddAuthMutation,
    useAddTokenMutation
  } = authApi;