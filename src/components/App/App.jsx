import { Box } from 'components/Common/Box.styled';
import { Section } from 'components/Section/Section';
import { ListOfContacts } from 'components/ListOfContacts/ListOfContacts';
import { FilterForm } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';

export const App = () => {

  return (
    <Box display="flex" flexDirection="row">
      <Box display="flex" flexDirection="column">
        <Section title="Contact info">
          <ContactForm />
        </Section>
        <Section>
          <FilterForm />
        </Section>
      </Box>

      <Box display="flex" flexDirection="column">
        <Section title="Contact list" height="100%">
          <ListOfContacts />
        </Section>
      </Box>
    </Box>
  );
};
