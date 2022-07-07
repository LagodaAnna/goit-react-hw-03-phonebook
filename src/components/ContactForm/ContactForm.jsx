import PropTypes from 'prop-types';
import { Component } from 'react';
import { Form, Label, FieldWrapper, Input, Button } from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    checkDuplicates: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    const { onSubmit, checkDuplicates } = this.props;
    const { name } = this.state;

    evt.preventDefault();
    if (checkDuplicates(name)) {
      return;
    }

    onSubmit({ ...this.state });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FieldWrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </FieldWrapper>

        <FieldWrapper>
          <Label htmlFor="number">Number</Label>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </FieldWrapper>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
