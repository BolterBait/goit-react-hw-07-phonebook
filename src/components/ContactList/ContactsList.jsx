import React from 'react';
import { useSelector } from 'react-redux/es/exports';

import { selectFilteredContacts } from 'redux/selectors';

import { ContactItem } from '../ContactItem/ContactItem';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};
