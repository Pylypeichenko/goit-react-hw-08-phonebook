export const addContact = ({ id, name, number }) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id,
      name,
      number,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const setFilter = value => {
  return {
    type: 'contacts/setFilter',
    payload: value,
  };
};
