
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export interface AuthResponse {
    access: string;
    refresh: string;
};
interface TokenInputProps {
    username: string;
    password: string;
};

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8002/users'}),
    endpoints: (builder) => ({
        addAuth: builder.mutation({
            query: (body) => ({
                url: '/register/',
                method: 'POST',
                body
            }),
        }),
        addToken: builder.mutation<AuthResponse, Partial<TokenInputProps>>({
            query: (credentials) => {
                return ({
                    url: '/token/',
                    method: 'POST',
                    body: credentials
                })
            },
        }),
    })
})

export const {
    useAddAuthMutation,
    useAddTokenMutation
  } = authApi;