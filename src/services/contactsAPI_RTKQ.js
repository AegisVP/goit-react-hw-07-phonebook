import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsAPI = createApi({
  reducerPath: 'phonebook',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://63348ed3849edb52d6f3da86.mockapi.io/phonebook' }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchPhonebook: builder.query({
      query: () => '/contacts',
      providesTags: () => [{ type: 'Contacts' }],
    }),

    addContact: builder.mutation({
      query: ({ name, number }) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: () => [{ type: 'Contacts' }],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [{ type: 'Contacts' }],
    }),
  }),
});

export const { useFetchPhonebookQuery, useAddContactMutation, useDeleteContactMutation } = contactsAPI;
