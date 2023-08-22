import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { UserProps, AuthProps } from "../../consts/consts";


export const authApi = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8002' }),
    tagTypes: ['AuthType'],
    endpoints: (builder) => ({
        addAuth: builder.mutation<UserProps, string>({
            query: (auth) => ({
                url: '/user/registration',
                method: 'POST',
                body: auth
            }),
            invalidatesTags: ['AuthType']
        }),
        getAuth: builder.query<AuthProps, string>({
            query: () => '/users',
            providesTags: ['AuthType']
        })
    })
})

export const {useAddAuthMutation, useGetAuthQuery } = authApi