import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30px;
`;

const LabelInputName = styled.label`
  text-align: center;
  margin-left: 15px;
`;

const InputName = styled.input``;

const LabelInputPhone = styled.label`
  font-size: 17px;
  margin-bottom: 10px;
`;

const InputPhone = styled.input`
  font-size: 17px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;

  background-color: #4caf50;
  cursor: pointer;

  width: fit-content;
  height: 25px;

  color: black;

  &:hover {
    background-color: green;
    color: white;
  }
`;

export {
  FormContainer,
  LabelInputName,
  InputName,
  LabelInputPhone,
  InputPhone,
  Button,
};
