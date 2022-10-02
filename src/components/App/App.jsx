import { Box } from 'components/Common/Box.styled';
import { Section } from 'components/Section/Section';
import { ListOfContacts } from 'components/ListOfContacts/ListOfContacts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FilterForm } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { selectIsLoading, selectContacts, selectFilter } from 'redux/selectors';
import { fetchPhonebook } from 'redux/phonebook/contacts/operations';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);
  const [filteredContacts, setFilteredContacts] = useState();

  useEffect(() => {
    dispatch(fetchPhonebook());
  }, [dispatch]);

  useEffect(() => {
    const normalizedFilter = String(filter?.search).toLocaleLowerCase();
    setFilteredContacts(
      contacts
        .filter(contact => contact?.name?.toLocaleLowerCase().includes(normalizedFilter))
        .sort((a, b) => a.name.localeCompare(b.name))
    );
  }, [contacts, filter]);

  return (
    <Box display="flex" flexDirection="row">
      <Box display="flex" flexDirection="column">
        <Section title="Contact info">
          <ContactForm />
        </Section>
        {!isLoading && contacts.length > 0 && (
          <Section>
            <FilterForm />
          </Section>
        )}
      </Box>

      {isLoading ? (
        <Section title="Loading...">Please wait</Section>
      ) : (
        contacts?.length > 0 && (
          <Box display="flex" flexDirection="column">
            <Section title="Contact list" height="100%">
              <ListOfContacts contacts={filteredContacts}></ListOfContacts>
            </Section>
          </Box>
        )
      )}
    </Box>
  );
};
