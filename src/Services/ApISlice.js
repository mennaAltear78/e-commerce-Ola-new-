import { createApi } from '@reduxjs/toolkit/query/react';
import { supabase } from '../Api/supabaseClient';

export const apiSlice = createApi({
  reducerPath: 'ApiProducts',
  tagTypes: ['DashboardProducts'],
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: () => ({ data: null }),
  endpoints: (builder) => ({
    getDashboardProductList: builder.query({
      async queryFn() {
        const { data, error } = await supabase
          .from('products')
          .select('*');
          console.log('Supabase response:', data);
          console.log('Error:', error);
        if (error) return { error };
        return { data: { data: data || [] } };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({ type: 'DashboardProducts', id })),
              { type: 'DashboardProducts', id: 'LIST' },
            ]
          : [{ type: 'DashboardProducts', id: 'LIST' }],
    }),
    UpdateDashboardProducts: builder.mutation({
      async queryFn({ id, body }) {
        if (id === null) return { error: { message: 'No ID provided' } };
        const { data, error } = await supabase
          .from('products')
          .update(body)
          .eq('id', id)
          .select();
        if (error) return { error };
        return { data };
      },
      invalidatesTags: [{ type: 'DashboardProducts', id: 'LIST' }],
    }),
    deleteDashboardProducts: builder.mutation({
      async queryFn(id) {
        if (id === null) return { error: { message: 'No ID provided' } };
        const { error } = await supabase
          .from('products')
          .delete()
          .eq('id', id) .select(); ;
        if (error) return { error };
        return { data: { success: true } };
      },
      invalidatesTags: [{ type: 'DashboardProducts', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetDashboardProductListQuery,
  useDeleteDashboardProductsMutation,
  useUpdateDashboardProductsMutation 
} =apiSlice;
