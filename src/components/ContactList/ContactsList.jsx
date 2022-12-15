import { Filter } from 'components/Filter/Filter';
import React from 'react';
import { useSelector } from 'react-redux/es/exports';

import {
  selectFilteredContacts,
  selectContacts,
} from 'redux/Contacts/selectors';

import { ContactItem } from '../ContactItem/ContactItem';

import { Container, Title } from './ContactsList.styled';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);
  return (
    <Container>
      <h1>My Phonebook</h1>
      {contacts.length > 0 && <Filter />}
      <h2>Contacts</h2>
      {!filteredContacts.length ? (
        <p>'Provide some contacts'</p>
      ) : (
        <ul>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactItem key={id} name={name} number={number} id={id} />
          ))}
        </ul>
      )}
    </Container>
  );
};
