import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {DEFAULT_URL} from "../const.ts";

export interface AuthResponse {
  access: string;
  refresh: string;
}

interface TokenInputProps {
  username: string;
  password: string;
}


export interface UserProps {
  username: string,
  password: string,
  password2: string,
  first_name: string,
  last_name: string,
  email: string,
  profile_image: string,
}

export interface RegisterResponse {
  username: string,
  first_name: string,
  last_name: string,
  email: string,
  profile_image: string,
}

const token: {
  access_token: string,
  refresh_token: string,
} = JSON.parse(localStorage.getItem('token') as string);

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({baseUrl: DEFAULT_URL}),
  endpoints: (builder) => ({
    addAuth: builder.mutation({
      query: (body) => ({
        url: '/users/register/',
        method: 'POST',
        body
      }),
    }),
    addToken: builder.mutation<AuthResponse, Partial<TokenInputProps>>({
      query: (credentials) => {
        return ({
          url: '/users/token/',
          method: 'POST',
          body: credentials
        })
      },
    }),
    refreshToken: builder.mutation({
      query: (body) => {
        return ({
          url: '/users/token/refresh/',
          method: 'POST',
          body
        })
      },
    }),
    getUserData: builder.query<UserProps, string>({
      query: () => ({
        url: '/users/',
        options: {
          headers: {
            Authorization: `Bearer ${token.access_token}`
          }
        }
      })
    }),
  }),
});

export const { useAddAuthMutation, useAddTokenMutation, useGetUserDataQuery, useRefreshTokenMutation } = authApi;
