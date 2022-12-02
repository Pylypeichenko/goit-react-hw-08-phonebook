import { getContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

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
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section>
        <PageTitle>Phonebook</PageTitle>
        <SectionTitle>Adding contact</SectionTitle>
        <Form />
      </Section>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
      {items.length > 0 ? (
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
