
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const loginRTK = createApi({
  reducerPath: 'login_page',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    get1PokemonByName: builder.query<null, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})
 
export const { } = loginRTK