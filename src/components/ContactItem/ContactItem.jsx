import { Box } from "components/Common/Box.styled";
import { useDispatch } from "react-redux"
import { deleteContact } from "redux/phonebook/contacts/operations";
import { Button, ListItem, Name, Number } from "./ContactItem.styled";


export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ListItem key={contact.id}>
      <Box display="flex">
        <Name>{contact.name}</Name>
        <Number className="number">{contact.number}</Number>
      </Box>
      <Box>
        <Button onClick={() => dispatch(deleteContact(contact.id))}>❌</Button>
      </Box>
    </ListItem>
  );
}