import { combineReducers } from 'redux';
import { phonebookReducer } from './phonebook/reducers';
import { filtersReducer } from './filter/sliceFilter';

const contactsReducer = combineReducers({
  items: phonebookReducer,
  filter: filtersReducer,
});

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});
