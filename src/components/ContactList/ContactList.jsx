
import { useSelector } from 'react-redux';
import { getItems, getFilter } from "redux/contactsSlice";
import { ContactElement } from "./ContactElement";
import { List } from "./ContactList.styled";
import PropTypes from 'prop-types';

export const ContactList = () => {
  const items = useSelector(getItems);
  const filter = useSelector(getFilter);
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <List >
      {filteredItems.map(item => (
        
        <ContactElement
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
          item={item}
        />
      ))}
    </List>
  )
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
};