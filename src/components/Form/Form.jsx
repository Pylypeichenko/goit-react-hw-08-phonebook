import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { ContactForm, Label, Input, Button } from './Form.styled';

export const Form = () => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    if (e.target.name === 'name') {
      setContactName(e.target.value);
    }
    if (e.target.name === 'number') {
      setContactNumber(e.target.value);
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const contact = {
      name: contactName,
      number: contactNumber,
    };

    const repeatedNames = contacts.filter(item => item.name === contactName);

    if (repeatedNames.length === 0) {
      // dispatch(addContact(contact));
    }
    if (repeatedNames.length !== 0) {
      window.alert('You have already this contact in your list');
    }

    form.reset();
  };

  return (
    <ContactForm onSubmit={handleFormSubmit}>
      <Label htmlFor="contactName">Write down a name</Label>
      <Input
        id="contactName"
        type="text"
        name="name"
        onChange={handleInputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="e. g., John Smith"
        required
      />
      <Label htmlFor="contactTel">Write down a phone number</Label>
      <Input
        id="contactTel"
        type="tel"
        name="number"
        onChange={handleInputChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </ContactForm>
  );
};
