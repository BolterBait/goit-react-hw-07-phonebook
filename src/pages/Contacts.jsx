import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/Contacts/selectors';
import { fetchContacts } from 'redux/Contacts/operation';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactsList';
import { useAuth } from 'hooks';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <title>Contact Book</title>

      <ContactForm />
      <div>{isLoading && 'Your contacts is loading...'}</div>
      <ContactsList />
    </>
  );
}
