import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ProductProps} from "../../consts/consts.ts";
import {DEFAULT_URL} from "../const.ts";

export const usersApi= createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({ baseUrl: DEFAULT_URL }),
    endpoints: (builder) => ({
        getFavourites: builder.query<ProductProps[], string>({
            query: () => '/users/favourite'
        }),
        setFavourites: builder.mutation({
            query: (id) => ({
                url: `/products/product/${id}/favourite`,
                method: 'POST',
            })
        }),
    }),
})


export const {useGetFavouritesQuery, useSetFavouritesMutation } = usersApi;