import { Box } from 'components/Common/Box.styled';
import { useDeleteContactMutation } from 'services/contactsAPI';
import { Button, ListItem, Name, Number } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const [deleteContact, { isSuccess, isLoading, isError }] = useDeleteContactMutation();

  const onDeleteContact = id => {
    deleteContact(id);
  };

  if (!isSuccess)
    return (
      <ListItem key={contact.id}>
        <Box display="flex">
          <Name>{contact.name}</Name>
          <Number className="number">{contact.number}</Number>
        </Box>
        <Box>
          <Button onClick={() => onDeleteContact(contact.id)} disabled={isLoading}>
            {isError ? '⛔' : isLoading ? '🛠' : '🗑'}
          </Button>
        </Box>
      </ListItem>
    );
};
