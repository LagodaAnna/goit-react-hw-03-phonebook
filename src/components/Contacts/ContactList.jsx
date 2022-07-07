import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import { List } from './Contacts.styled';

const ContactList = ({ value, handleDelete }) => {
  return (
    <List>
      {value?.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            handleDelete={handleDelete}
          />
        );
      })}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  value: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
