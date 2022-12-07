import React from 'react';
import { getFilter, getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux/es/exports';

import { ContactItem } from '../ContactItem/ContactItem';

export const ContactsList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const getFilteredContacts = () => {
    const normalizedValue = filter.toLowerCase();
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedValue)
    );
  };

  const filteredContacts = getFilteredContacts();
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};
