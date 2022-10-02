import React from 'react';
import { List } from 'components/ListOfContacts/ListOfContacts.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ListOfContacts = ({ contacts }) => {

  return <List>{contacts.length > 0 ? contacts.map(contact => <ContactItem contact={contact} key={contact.id}/>) : 'No matches found'}</List>;
};
