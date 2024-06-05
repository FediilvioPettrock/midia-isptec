import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

// Estilos para o container principal e colunas
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const Header = styled.header`
  background-color: #333;
  padding: 10px;
  color: white;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    order: 2;
    padding: 10px;
  }
`;

const CenterColumn = styled.div`
  flex: 2;
  padding: 20px;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    order: 1;
    padding: 10px;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    order: 3;
    padding: 10px;
  }
`;

const WelcomeMessage = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ContentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContentItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #ddd;
`;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
  
      <AppContainer>
        <Header>
          <Navbar>
            <div>
              <NavItem to="/">Home</NavItem>
            </div>
            <MenuIcon onClick={toggleMenu}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </MenuIcon>
            <NavItems isOpen={isOpen}>
              <NavItem to="/profile">Profile</NavItem>
              <NavItem to="/settings">Settings</NavItem>
              <NavItem to="/login">Login</NavItem>
              <NavItem to="/logout">Logout</NavItem>
            </NavItems>
          </Navbar>
        </Header>
        <HomeContainer>
          <ContentWrapper>
            <LeftColumn>
              <h2>Navigation</h2>
              <nav>
                <ul>
                  <li><NavItem to="/">Home</NavItem></li>
                  <li><NavItem to="/profile">Profile</NavItem></li>
                  <li><NavItem to="/settings">Settings</NavItem></li>
                  <li><NavItem to="/logout">Logout</NavItem></li>
                </ul>
              </nav>
            </LeftColumn>
            <CenterColumn>
              <WelcomeMessage>Welcome to the Media Player App</WelcomeMessage>
              <p>Here you can play your favorite multimedia content!</p>
              {/* Aqui você pode adicionar o componente de reprodução multimídia */}
            </CenterColumn>
            <RightColumn>
              <h2>Featured Content</h2>
              <ContentList>
                <ContentItem>Video 1</ContentItem>
                <ContentItem>Video 2</ContentItem>
                <ContentItem>Video 3</ContentItem>
                <ContentItem>Video 4</ContentItem>
              </ContentList>
            </RightColumn>
          </ContentWrapper>
        </HomeContainer>
      </AppContainer>
    
  );
};

export default Home;
