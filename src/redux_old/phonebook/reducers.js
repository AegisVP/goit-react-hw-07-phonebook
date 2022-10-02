import { createReducer, nanoid } from '@reduxjs/toolkit';
import { showAlert } from 'services/showAlert';
import * as phonebookActions from './actions';

export const phonebookReducer = createReducer([], {
  [phonebookActions.addContact]: (phonebook, action) => {
    if (phonebook.some(({ name }) => name.toLocaleLowerCase() === action.payload.name.trim().toLocaleLowerCase())) {
      showAlert('This name already exists in the list!');
      return [...phonebook];
    }

    return [
      ...phonebook,
      {
        id: nanoid(),
        name: action.payload.name.trim(),
        number: action.payload.number,
      },
    ];
  },

  [phonebookActions.deleteContact]: (phonebook, action) => {
    return phonebook.filter(item => item.id !== action.payload);
  },
});
