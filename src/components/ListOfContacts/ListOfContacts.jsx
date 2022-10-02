import React from 'react';
import { useSelector } from 'react-redux';
import { List } from 'components/ListOfContacts/ListOfContacts.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useFetchPhonebookQuery } from 'services/contactsAPI';
import { selectFilter } from 'redux/selectors';

export const ListOfContacts = () => {
  const { data = [], isLoading } = useFetchPhonebookQuery();
  const filter = useSelector(selectFilter);

  const filteredContacts = [...data]
    .filter(contact => contact.name.toLowerCase().indexOf(filter.search.trim().toLowerCase()) > -1)
    .sort((a, b) => a.name.localeCompare(b.name));

  return isLoading ? (
    'Please wait, Loading...'
  ) : (
    <List>
      {data.length > 0
        ? filteredContacts.length > 0
          ? filteredContacts.map(contact => <ContactItem contact={contact} key={contact.id} />)
          : 'No matches found'
        : 'Your phonebook is empty'}
    </List>
  );
};
