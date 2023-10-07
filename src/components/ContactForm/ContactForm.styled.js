import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  border-radius: 5px;

  background-color: #4caf50;
  cursor: pointer;

  width: fit-content;
  height: 25px;

  /* display: flex; */
  /* align-items: center; */
  padding: 10px;

  color: black;

  &:hover {
    background-color: green;
    color: white;
  }
`;
