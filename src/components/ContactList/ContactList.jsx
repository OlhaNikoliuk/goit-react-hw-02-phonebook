import PropTypes from "prop-types";
import { List, ListItem, Button } from "./ContactList.styled";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <List>
      {contacts.map((contact) => {
        return (
          <ListItem key={contact.id}>
            {contact.name}:<span> {contact.number}</span>
            <Button type="button" onClick={() => onDeleteContact(contact.id)}>
              Delete
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
