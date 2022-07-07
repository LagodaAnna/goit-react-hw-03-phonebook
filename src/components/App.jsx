import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './Contacts';
import Box from './Box';

const LS_CONTACTS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem(LS_CONTACTS_KEY);

    try {
      const parsedContacts = JSON.parse(contacts);
      if (parsedContacts) {
        this.setState({ contacts: parsedContacts });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(_, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (prevContacts !== nextContacts) {
      localStorage.setItem(LS_CONTACTS_KEY, JSON.stringify(nextContacts));
    }
  }

  checkDuplicates = name => {
    const { contacts } = this.state;
    const allNames = contacts.map(contact => contact.name);

    if (allNames.includes(name)) {
      alert(`${name} is already in contacts`);
      return true;
    }
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  handleFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  handleDelete = contactId => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(contact => contact.id !== contactId),
      };
    });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.filterContacts();

    return (
      <Box
        width="60%"
        minHeight="100vh"
        my={0}
        mx="auto"
        p={4}
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        bg="mainBg"
        borderRadius="normal"
      >
        <Box mb={6} p={4} bg="secondaryBg" borderRadius="normal">
          <h1>Phonebook</h1>
          <ContactForm
            onSubmit={this.addContact}
            checkDuplicates={this.checkDuplicates}
          />
          <Filter value={this.state.filter} onChange={this.handleFilter} />
        </Box>

        <Box p={4} minHeight="250px" bg="secondaryBg" borderRadius="normal">
          <h2>Contacts</h2>
          <ContactList
            value={visibleContacts}
            handleDelete={this.handleDelete}
          />
        </Box>
      </Box>
    );
  }
}
