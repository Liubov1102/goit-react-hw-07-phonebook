import styled from 'styled-components';

export const Item = styled.li`
    display: flex;
    justify-content:space-between;
    align-items: center ;
    font-size: 20px;
    font-weight: 400;
    margin-left: 10px;   
`;

export const Button = styled.button`
    cursor: pointer;
    padding: 10px;
    display: block;
    margin: 5px 10px;
    background: rgb(226, 226, 226);
    border: none;
    border-radius: 4px;
    transition-property: box-shadow;
    font-weight: 400;
    font-size: 16px;
:hover {
    background: rgb(175, 175, 175);
`;
