import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

import { Contact } from '../Contact/Contact';

import { ListItem } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts.filter(item => {
    return item.name.toLowerCase().includes(filter.toLowerCase().trim());
  });

  return (
    <ul>
      {filteredContacts &&
        contacts.map(contact => {
          return (
            <ListItem key={contact.id}>
              <Contact contact={contact} />
            </ListItem>
          );
        })}
    </ul>
  );
};
