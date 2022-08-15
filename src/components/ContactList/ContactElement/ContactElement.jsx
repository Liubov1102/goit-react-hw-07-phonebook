
import { Item, Button } from "./ContactElement.styled";
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactElement = ({  id, name, phone  }) => {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <Item >
      <span>{name}</span> : <span>{phone}</span>
      <Button type='button' onClick={() => deleteContact(id)}>Delete</Button>
    </Item>
  );
};


