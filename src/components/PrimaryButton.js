import styled from 'styled-components';

const PrimaryButton = styled.button`
  background-color: #F4B400; /* Botões Primários */
  color: #000000; /* Texto Principal */
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: #F7C546; /* Hover em Botões */
  }
`;

export default PrimaryButton;
