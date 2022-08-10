
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Item, Button } from "./ContactElement.styled";
import { deleteContact } from 'redux/contactsSlice';

export const ContactElement = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <Item >
      {name} : {number}
      <Button type='button' onClick={() => dispatch(deleteContact({id}))}>Delete</Button>
    </Item>
  );
};

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  
};
