import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactsAPI } from 'services/contactsAPI_RTKQ';
import contactsReducer from './phonebook/contacts/reducers';
import { filterReducer } from './phonebook/filter/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [contactsAPI.reducerPath]: contactsAPI.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsAPI.middleware],
});

setupListeners(store.dispatch);
