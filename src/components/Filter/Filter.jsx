import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/filteredSlice';
import { getFilter } from 'redux/selectors';
import { Field, FieldName } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilter = event => {
    const value = event.target.value.trim();

    dispatch(getFilteredContacts(value));
  };

  return (
    <FieldName>
      Find contacts by name
      <Field type="text" name="filter" onChange={onFilter} value={filter} />
    </FieldName>
  );
};
