import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

import { ContactInfo, Button } from './Contact.styled';

export const Contact = contact => {
  const dispatch = useDispatch();
  console.log(contact);
  const { name, number, id } = contact.contact;

  const onContactDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <Button type="button" onClick={onContactDelete}>
        Delete contact
      </Button>
    </>
  );
};
