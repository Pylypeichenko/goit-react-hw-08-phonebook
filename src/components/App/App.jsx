import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

import {
  Container,
  Section,
  PageTitle,
  SectionTitle,
  Notification,
} from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFormSubmit = contactData => {
    const contact = {
      id: nanoid(),
      ...contactData,
    };

    const contactNames = contacts.map(item => item.name.toLowerCase());

    if (contactNames.includes(contact.name.toLowerCase())) {
      window.alert(`${contact.name} is already in your Phonebook`);
      return;
    }

    setContacts(contacts => [...contacts, contact]);
  };

  return (
    <Container>
      <Section>
        <PageTitle>Phonebook</PageTitle>
        <SectionTitle>Adding contact</SectionTitle>
        <Form onFormSubmit={handleFormSubmit} />
      </Section>
      {contacts.length > 0 ? (
        <Section>
          <SectionTitle>Your noted contacts</SectionTitle>
          <Filter />
          <ContactList />
        </Section>
      ) : (
        <Notification>There are no contacts. Please add some.</Notification>
      )}
    </Container>
  );
};
