
import { AuthProps } from "../../consts/auths";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8002' }),
    endpoints: (builder) => ({
        addAuth: builder.mutation({
            query: (body) => ({
                url: '/users/register',
                method: 'POST',
                body
            }),
        }),
        getAuth: builder.query<AuthProps[], void>({
            query: () => '/users',
        }),
        getToken: builder.query({
            query: () => '/users/token',
                        }),
    })
})

export const {
    useAddAuthMutation,
    useGetAuthQuery,
    useGetTokenQuery
  } = authApi;