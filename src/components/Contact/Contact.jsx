import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContact } from 'redux/operations';

import { ContactInfo, Button } from './Contact.styled';

export const Contact = contact => {
  const dispatch = useDispatch();
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

Contact.propTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
});
