import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGetHomeArray, IPostStreat,IGetHome } from '../../types/data'

export const userRTK = createApi({
  reducerPath: 'streats',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://86.107.197.112/' }),
  tagTypes: ['streats'],
  endpoints: (builder) => ({
    oneGetStreat:builder.query<IGetHome,{id:string}>({
      query:(data)=>`/device-detail/${data.id}`
    }),
    getStreats: builder.query<IGetHomeArray,null>({
      query: () => `device-list`,
      providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'streats' as const, id })),
                        { type: 'streats', id: 'List' },
                    ]
                    : [{ type: 'streats', id:'List' }],
    }),
    postStreat:builder.mutation<IPostStreat,IPostStreat>({
      query:(data)=>({
        url: 'device-list/',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'streats', id: 'List' }],
    }),
    deleteStreat:builder.mutation<{message:string},{imie:string}>({
      query:(data)=>({
        url:`device-detail/${data.imie}`,
        method:"DELETE"
      }),
      invalidatesTags: [{ type: 'streats', id: 'List' }],
    }),
    putStreat:builder.mutation<IPostStreat,{data:IPostStreat,imei:string}>({
      query:(data)=>({
        url:`device-detail/${data.imei}`,
        method:"PUT",
        body:data.data
      }),
      invalidatesTags: [{ type: 'streats', id: 'List' }],
    })
  }),
})
 
export const { useOneGetStreatQuery,useGetStreatsQuery,usePostStreatMutation,useDeleteStreatMutation,usePutStreatMutation} = userRTK