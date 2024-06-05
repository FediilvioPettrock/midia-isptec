import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// Estilos para o container principal e colunas
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: auto;
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
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
`;

const LeftColumn = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
`;

const CenterColumn = styled.div`
  flex: 2;
  padding: 20px;
  background-color: #fff;
  text-align: center;
`;

const RightColumn = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
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
    return (

        <AppContainer>
            <Header>
                <Navbar>
                    <div>
                        <NavItem to="/">Home</NavItem>
                        <NavItem to="/profile">Profile</NavItem>
                        <NavItem to="/settings">Settings</NavItem>
                    </div>
                    <div>
                        <NavItem to="/login">Login</NavItem>
                        <NavItem to="/logout">Logout</NavItem>
                    </div>
                </Navbar>
            </Header>
            <HomeContainer>
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
            </HomeContainer>
        </AppContainer>
    );
};

export default Home;
