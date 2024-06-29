import styled from 'styled-components';

export const CenterColumn = styled.div`
  flex: 2;
  padding: 20px;
  background-color: #FFFFFF; /* Background Principal */
  text-align: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    order: 1;
    padding: 10px;
  }
`;

export const WelcomeMessage = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #F4B400; /* Cabeçalhos e Links Importantes */
`;
