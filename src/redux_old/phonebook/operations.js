import * as phonebookActions from './actions';
import axios from 'axios';

export const fetchPhonebook = () => async dispatch => {
  dispatch(phonebookActions.fetchPhonebookRequest());

  try {
    const phonebook = await axios('');
    dispatch(phonebookActions.fetchPhonebookSuccess(phonebook));
  } catch (error) {
    dispatch(phonebookActions.fetchPhonebookFailure(error));
  }
};
