import React from 'react';
import {  useAddContactMutation, useGetContactsQuery } from 'redux/contactsSlice';
import { Formik, Form, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import { Button, Label, Input, ErrorText } from "./ContactForm.styled";
import Notiflix from 'notiflix';

const validationSchema = Yup.object({
  name: Yup.string().max(16).required('Please, enter name.'),
  phone: Yup.number().min(5).positive().required('Please, enter number.'),
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
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();
 
  const handleSubmit = async (values, { resetForm }) => {
    const { name, phone } = values;
     
    if (contacts.find(item => item.name === name) ||
      contacts.find(item => item.phone === phone)) {
      Notiflix.Notify.failure('This contact is already exists');
      return resetForm('');
    }
    
    await addContact({ name: name, phone: phone });
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
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
          type="phone"
          name="phone"
        />
        <FormError name="phone" />
        <Button type="submit" >
          Add Contact
        </Button>
      </Form>
    </Formik>
  )
};