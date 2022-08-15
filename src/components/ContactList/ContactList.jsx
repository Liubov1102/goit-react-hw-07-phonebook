import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlicer';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { ContactElement } from "./ContactElement/ContactElement";
import { List } from "./ContactList.styled";

export const ContactList = ()  => {
  const { data: contacts } = useGetContactsQuery();
  const filter = useSelector(getFilter);
  const filterContacts = contacts?.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
 
  return (
    <List >
      {contacts &&
        filterContacts.map(({ id, name, phone }) => (
        
        <ContactElement
          key={id}
          id={id}
          name={name}
          phone={phone}
          
        />
      ))}
    </List>
  )
};

