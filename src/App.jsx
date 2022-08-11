
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";
import { Box } from "./components/Box";
import { Title } from "./components/Title";
import { Subtitle } from "./components/Subtitle";

export const App = () => {

  return (
    <Box ml={256} >
      <Title>Phonebook</Title>
      <ContactForm />

      <Subtitle>Contacts</Subtitle>
      <Filter />
        
      <ContactList />
    </Box>
  )
};