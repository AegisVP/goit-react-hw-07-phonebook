import { combineReducers } from "redux";
import { phonebookReducer } from "./phonebook/contacts/reducers";
import { filtersReducer } from "./filterSlice";

const contactsReducer = combineReducers({
  items: phonebookReducer,
  filter: filtersReducer,
});

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});
