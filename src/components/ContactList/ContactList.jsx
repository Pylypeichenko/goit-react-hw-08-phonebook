import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { Contact } from '../Contact/Contact';

import { ListItem } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(item => {
    return item.name.toLowerCase().includes(filter.toLowerCase().trim());
  });

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
