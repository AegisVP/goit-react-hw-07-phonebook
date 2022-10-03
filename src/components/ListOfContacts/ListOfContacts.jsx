import React from 'react';
import { useSelector } from 'react-redux';
import { List } from 'components/ListOfContacts/ListOfContacts.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useFetchPhonebookQuery } from 'services/contactsAPI';
import { selectFilter } from 'redux/selectors';

export const ListOfContacts = () => {
  const { data: allContacts = [], isLoading } = useFetchPhonebookQuery();
  const filter = useSelector(selectFilter);

  const filteredContacts = [...allContacts]
    .filter(contact => contact.name.toLowerCase().indexOf(filter.search.trim().toLowerCase()) > -1)
    .sort((a, b) => a.name.localeCompare(b.name));

  return isLoading ? (
    'Please wait, Loading...'
  ) : (
    <List>
      {allContacts.length > 0
        ? filteredContacts.length > 0
          ? filteredContacts.map(contact => <ContactItem contact={contact} key={contact.id} />)
          : 'No matches found'
        : 'Your phonebook is empty'}
    </List>
  );
};
