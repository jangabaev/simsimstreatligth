import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGetHomeArray, IPostStreat,IGetHome } from '../../types/data'

export const userRTK = createApi({
  reducerPath: 'streats',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://simsim1.pythonanywhere.com/' }),
  tagTypes: ['streats'],
  endpoints: (builder) => ({
    oneGetStreat:builder.query<IGetHome,{id:string}>({
      query:(data)=>`/device_list/${data.id}`
    }),
    getStreats: builder.query<IGetHomeArray,null>({
      query: () => `/device_list/`,
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
        url: 'device_list/',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'streats', id: 'List' }],
    }),
    deleteStreat:builder.mutation<{message:string},{id:number}>({
      query:(data)=>({
        url:`device_list/${data.id}`,
        method:"DELETE"
      }),
      invalidatesTags: [{ type: 'streats', id: 'List' }],
    }),
    putStreat:builder.mutation<IPostStreat,{data:IPostStreat,id:string}>({
      query:(data)=>({
        url:`/device_list/${data.id}`,
        method:"PUT",
        body:data.data
      }),
      invalidatesTags: [{ type: 'streats', id: 'List' }],
    })
  }),
})
 
export const { useOneGetStreatQuery,useGetStreatsQuery,usePostStreatMutation,useDeleteStreatMutation,usePutStreatMutation} = userRTK