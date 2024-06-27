import React from 'react';
import AppContainer from '../styles/AppContainer';
import Header from '../components/Header';
import LeftColumn from '../components/LeftColumn';
import CenterColumn from '../components/CenterColumn';
import RightColumn from '../components/RightColumn';
import RegisterForm from '../components/RegisterForm'
import Footer from '../components/Footer';
import { ContentWrapper, HomeContainer } from '../styles/HomePageStyles';

const RegisterPage = () => {
  return (
    <AppContainer>
      <Header />
      <HomeContainer>
        <ContentWrapper>
          <RegisterForm />
        </ContentWrapper>
      </HomeContainer>
      <Footer />
    </AppContainer>
  );
};

export default RegisterPage;
