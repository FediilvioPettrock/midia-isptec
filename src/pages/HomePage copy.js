import React, { useState } from 'react';
import styled from 'styled-components';
import styles from './HomePage.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import ListPlaylists from '../components/ListPlaylists';
import LinkButton from '../components/LinkButton';


// Estilos para o container principal e colunas
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #FFFFFF; /* Background Principal */
`;

const Header = styled.header`
  background-color: #222; /* Background de Secções */

  color: #fff; /* Texto Principal */
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
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const NavItem = styled(Link)`
  color: white; /* Links e Acentos */
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    color: #F7C546;
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

  &:hover {
    color: #F7C546;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF; /* Background Principal */
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  border: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #BDBDBD; /* Background de Secções */
  color: 000; /* Texto Principal */
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

const CenterColumn = styled.div`
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

const RightColumn = styled.div`
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

const WelcomeMessage = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #F4B400; /* Cabeçalhos e Links Importantes */
`;

// const ContentList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const ContentItem = styled.li`
//   margin-bottom: 10px;
//   padding: 10px;
//   background-color: #9E9E9E; /* Bordas e Linhas Divisórias */
//   color: #000000; /* Texto Principal */
// `;

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

const SecondaryButton = styled.button`
  background-color: #616161; /* Botões Secundários */
  color: #FFFFFF; /* Texto Branco */
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: #F7C546; /* Hover em Botões */
  }
`;


const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppContainer>
      <Header>
        <Navbar>
          <div>
            <NavItem to="/">IMP</NavItem>
          </div>
          <MenuIcon onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MenuIcon>
          <NavItems isOpen={isOpen}>
            <NavItem to="/profile">Profile</NavItem>
            <NavItem to="/settings">Playlists</NavItem>
            <NavItem to="/settings">Settings</NavItem>
            <LinkButton to="/login" text="Entrar" color="#F4B400"/>
          </NavItems>
        </Navbar>
      </Header>
      <HomeContainer>
        <ContentWrapper>
          <LeftColumn>
            <nav className='left_navbar'>
              <ul>
                <li><NavItem to="/">Criar grupo</NavItem></li>
                <li><NavItem to="/">Meus grupo</NavItem></li>
                <li><NavItem to="/profile">Playlist</NavItem></li>
              </ul>
            </nav>
            <nav className='left_navbar'>
              <ul>
                <li><NavItem to="/">Partilhar</NavItem></li>
                <li><NavItem to="/settings">Explorar</NavItem></li>
              </ul>
            </nav>
            <nav className='left_navbar'>
              <ul>
                <li><NavItem to="/">Meu perfil</NavItem></li>
                <li><NavItem to="/profile">Definições</NavItem></li>
                <li><NavItem to="/settings">Sair</NavItem></li>
              </ul>
            </nav>

          </LeftColumn>
          <CenterColumn>
            <WelcomeMessage>Bem-vindo a <span>ISP Media Player</span></WelcomeMessage>
            <p>O seu local predileto de assistir, ouvir e ler!</p>
            <PrimaryButton>Entrar</PrimaryButton>
            <SecondaryButton>Criar nova conta</SecondaryButton>
            {/* Aqui você pode adicionar o componente de reprodução multimídia */}
          </CenterColumn>
          <RightColumn>
            <h2>Playlists</h2>
            <ListPlaylists />
          </RightColumn>
        </ContentWrapper>
      </HomeContainer>
    </AppContainer>
  );
};

export default HomePage;
