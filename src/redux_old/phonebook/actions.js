import { createAction } from '@reduxjs/toolkit';

export const fetchPhonebookRequest = createAction('phonebook/fetchPhonebookRequest');
export const fetchPhonebookSuccess = createAction('phonebook/fetchPhonebookSuccess');
export const fetchPhonebookFailure = createAction('phonebook/fetchPhonebookFailure');

export const addContact = createAction('phonebook/addContact');

export const deleteContact = createAction('phonebook/deleteContact');
