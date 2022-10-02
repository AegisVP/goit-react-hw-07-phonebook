import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchPhonebook } from './operations';

const items = createReducer([], {
  [fetchPhonebook.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (phonebook, action) => [...phonebook, action.payload],
  [deleteContact.fulfilled]: (phonebook, action) => phonebook.filter(item => item.id !== action.payload),
});

const isLoading = createReducer(false, {
  [fetchPhonebook.pending]: () => true,
  [fetchPhonebook.fulfilled]: () => false,
  [fetchPhonebook.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchPhonebook.rejected]: (_, action) => action.payload,
  [fetchPhonebook.pending]: () => null,
  [addContact.rejected]: (_, action) => action.payload,
  [addContact.pending]: () => null,
  [deleteContact.rejected]: (_, action) => action.payload,
  [deleteContact.pending]: () => null,
});

export default combineReducers({
  items,
  isLoading,
  error,
});
