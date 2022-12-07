import { React } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactList/ContactsList';
import { Filter } from '../Filter/Filter';

import { Container } from '../ContactList/Container.styled';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
};
