import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addContacts } from 'redux/Contacts/operation';
import { selectContacts } from 'redux/Contacts/selectors';

import { FieldName, Field, Wrap, AddButton } from './ContactForm.styled';

function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { name, number } = form.elements;

    for (const contact of contacts) {
      if (contact.name.toLowerCase() === name.value.toLowerCase()) {
        return alert(`${name.value} is already a contact`);
      }
    }
    dispatch(addContacts({ name: name.value, number: number.value }));
    form.reset();
  };

  return (
    <Wrap onSubmit={handleSubmit}>
      <FieldName>
        Name
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FieldName>
      <FieldName>
        Phone number
        <Field
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FieldName>
      <AddButton type="submit">Add contact</AddButton>
    </Wrap>
  );
}

export default ContactForm;
