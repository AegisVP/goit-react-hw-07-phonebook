import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsAPI = createApi({
  reducerPath: 'contactsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://63348ed3849edb52d6f3da86.mockapi.io/phonebook' }),
  endpoints: builder => ({
    fetchPhonebook: builder.query({ query: '/contacts' }),

    addContact: builder.mutation({
      query: (name, number) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name,
          number,
        },
      }),
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useFetchPhonebookQuery, useAddContactMutation, useDeleteContactMutation } = contactsAPI;