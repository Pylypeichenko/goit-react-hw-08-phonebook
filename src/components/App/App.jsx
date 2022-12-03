import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
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
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
      <Section>
        <SectionTitle>Your noted contacts</SectionTitle>
        {error && <b>{error}</b>}
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Notification>There are no contacts. Please add some.</Notification>
        )}
        {isLoading && <b>Loading contacts...</b>}
      </Section>
    </Container>
  );
};
