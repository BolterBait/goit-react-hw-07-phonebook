import { React } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchContacts } from 'redux/operations';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { ContactsList } from '../ContactList/ContactsList';
import { Filter } from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';

import { Container } from '../ContactList/Container.styled';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length ? (
        <>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <p>Please add contacts to your phonebook</p>
      )}
      {isLoading && <p>'Loading'</p>}
      {error && <p>{error}</p>}
    </Container>
  );
};
