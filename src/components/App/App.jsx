import { useDispatch } from 'react-redux'; //useSelector
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
// import { fetchContacts } from 'redux/operations';
// import { Form } from '../Form/Form';
// import { Filter } from '../Filter/Filter';
// import { ContactList } from '../ContactList/ContactList';
import { Layout } from '../Layout';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { refreshUser } from '../../redux/operations';
import { useAuth } from '../../hooks/useAuth';

// import {
//   Container,
//   Section,
//   PageTitle,
//   SectionTitle,
//   Notification,
// } from './App.styled';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/LogIn'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );

  // return (
  //   <Container>
  //     <Section>
  //       <PageTitle>Phonebook</PageTitle>
  //       <SectionTitle>Adding contact</SectionTitle>
  //       <Form />
  //     </Section>
  //     <Section>
  //       <SectionTitle>Your noted contacts</SectionTitle>
  //       {error && <b>{error}</b>}
  //       {contacts.length > 0 ? (
  //         <>
  //           <Filter />
  //           <ContactList />
  //         </>
  //       ) : (
  //         <Notification>There are no contacts. Please add some.</Notification>
  //       )}
  //       {isLoading && <b>Loading contacts...</b>}
  //     </Section>
  //   </Container>
  // );
};
