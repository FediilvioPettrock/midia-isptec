import React from 'react';
import AppContainer from '../styles/AppContainer';
import Header from '../components/Header';
import LeftColumn from '../components/LeftColumn';
import CenterColumn from '../components/CenterColumn';
import RightColumn from '../components/RightColumn';
import { ContentWrapper, HomeContainer } from '../styles/HomePageStyles';

const HomePage = () => {
  return (
    <AppContainer>
      <Header />
      <HomeContainer>
        <ContentWrapper>
          <LeftColumn />
          <CenterColumn />
          <RightColumn />
        </ContentWrapper>
      </HomeContainer>
    </AppContainer>
  );
};

export default HomePage;
