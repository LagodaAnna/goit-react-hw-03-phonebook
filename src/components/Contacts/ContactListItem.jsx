import PropTypes from 'prop-types';
import { ContactItem, Name, Number, Button } from './Contacts.styled';

const ContactListItem = ({ id, name, number, handleDelete }) => {
  return (
    <ContactItem>
      <Name> {name}</Name> <Number>{number}</Number>
      <Button type="button" onClick={() => handleDelete(id)}>
        Delete
      </Button>
    </ContactItem>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
