import styled from 'styled-components';

export const RightColumn = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #BDBDBD; /* Background de Secções */
  color: #000000; /* Texto Principal */
  display: flex;
  flex-direction: column;
  border: solid 8px #BDBDBD;
  box-shadow: 1px 1px 5px #BDBDBD;
  border-radius: 15px;
  overflow-y: auto; /* Habilita a rolagem vertical */
  max-height: 85vh; /* Limita a altura ao tamanho da coluna pai */

  scrollbar-width: thin; /* "auto" ou "thin" */
  scrollbar-color: black #BDBDBD;
  
  @media (max-width: 768px) {
    order: 3;
    padding: 10px;
  }
`;
