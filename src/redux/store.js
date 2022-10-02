import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './phonebook/contacts/reducers';
import { filterReducer } from './phonebook/filter/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
