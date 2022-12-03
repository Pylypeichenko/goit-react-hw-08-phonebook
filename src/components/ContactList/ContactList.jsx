import { useSelector } from 'react-redux';
import { selectContacts, selectFilteredContacts } from 'redux/selectors';

import { Contact } from '../Contact/Contact';

import { ListItem } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts &&
        filteredContacts.map(contact => {
          return (
            <ListItem key={contact.id}>
              <Contact contact={contact} />
            </ListItem>
          );
        })}
    </ul>
  );
};
