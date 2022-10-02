import * as contactsAPI from 'services/contactsAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPhonebook = createAsyncThunk('phonebook/fetchPhonebook', async () => {
  const phonebook = await contactsAPI.fetchPhonebook();
  return phonebook;
});

export const addContact = createAsyncThunk('phonebook/addContact', async ({ name, number }) => {
  const { id } = await contactsAPI.addContact({ name, number });
  return { id, name, number };
});

export const deleteContact = createAsyncThunk('phonebook/deleteContact', async (id) => {
  await contactsAPI.deleteContact(id);
  return id;
})