import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { Form } from '../components/Form/Form';
import { Filter } from '../components/Filter/Filter';

import { ContactList } from '../components/ContactList/ContactList';
import { fetchContacts } from '../redux/contacts/operations';
import { selectContacts, selectIsLoading } from '../redux/selectors';

import {
  Container,
  Section,
  PageTitle,
  SectionTitle,
} from '../components/common.styled';
import { Notification } from '../components/App/App.styled';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div>{isLoading && 'Request in progress...'}</div>
      <Section>
        <PageTitle>Phonebook</PageTitle>
        <SectionTitle>Adding contact</SectionTitle>
        <Form />
      </Section>
      <Section>
        <SectionTitle>Your noted contacts</SectionTitle>
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
}
