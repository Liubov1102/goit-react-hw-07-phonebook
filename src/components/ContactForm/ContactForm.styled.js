import styled from 'styled-components';
import { Field } from 'formik';
import Notiflix from 'notiflix';

export const Input = styled(Field)`
    border: 1px solid black;
    font: inherit;
    font-size: 16px;
    padding: 8px;
    border-radius: 4px;
    width: 360px;
    outline: 0;
    
`;

export const Label = styled.label`
    display: block;
    font-size: 20px;
    font-weight: 500;
    margin-left: 20px;
    margin-top: 10px;
`;

export const Button = styled.button`
    cursor: pointer;
    padding: 10px;
    display: block;
    margin: 10px;
    background: rgb(226, 226, 226);
    border: none;
    border-radius: 4px;
    transition-property: box-shadow;
    font-weight: 400;
    font-size: 16px;
:hover {
    background: rgb(175, 175, 175);
`;

export const ErrorText = styled.p`
    margin-top: 0px;
    color: red;
`;

Notiflix.Notify.init({
    width: '280px',
    position: 'center-top',
    fontSize: `16px`,
    distance: '10px',
    opacity: 1,
    timeout: 3000,
    clickToClose: `true`,
});


