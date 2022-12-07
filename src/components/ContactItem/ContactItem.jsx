import React from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import PropTypes from 'prop-types';

import { deleteContact } from 'redux/contactsSlice';

import { Item, ItemField, DeleteButton } from './ContactItem.styled';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <ItemField>{name}:</ItemField>
      <ItemField>{number}</ItemField>
      <DeleteButton type="button" onClick={onDelete}>
        delete
      </DeleteButton>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
