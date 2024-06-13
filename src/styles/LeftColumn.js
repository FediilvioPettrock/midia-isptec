import styled from 'styled-components';

export const LeftColumn = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #BDBDBD; /* Background de Secções */
  color: #000; /* Texto Principal */
  display: flex;
  flex-direction: column;
  border: solid 8px #BDBDBD;
  box-shadow: 1px 1px 5px #BDBDBD;
  max-height: 85vh;
  border-radius: 15px;
  align-items: center;
  font-size: 1.1em;
  
  @media (max-width: 768px) {
    order: 3;
    padding: 10px;
  }
`;
