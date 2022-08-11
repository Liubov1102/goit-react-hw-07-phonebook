import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getItems } from 'redux/contactsSlice';
import { Formik, Form, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Button, Label, Input, ErrorText } from "./ContactForm.styled";
import Notiflix from 'notiflix';


const validationSchema = Yup.object({
  name: Yup.string().max(16).required('Please, enter name.'),
  number: Yup.number().min(5).positive().required('Please, enter number.'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};
  
export const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItems);
 
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    
    if (items.find(item => item.name === name) ||
      items.find(item => item.number === number)) {
      Notiflix.Notify.failure('This contact is already exists');
      return resetForm('');
    }
    else {
      dispatch(addContact({ id: nanoid(), name: name, number: number }));
      resetForm();
    };
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      <Form  >
        <Label htmlFor='inputName'>Name</Label>
        <Input
          type="text"
          name="name"
        />
        <FormError name="name" />
        <Label htmlFor='inputTel'>Number</Label>
        <Input
          type="tel"
          name="number"
        />
        <FormError name="number" />
        <Button type="submit" >
          Add Contact
        </Button>
      </Form>
    </Formik>
  )
};