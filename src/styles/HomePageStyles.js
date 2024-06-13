import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF; /* Background Principal */
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  border: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
