import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Navbar, NavItems, NavItem, MenuIcon } from '../styles/Navbar';
import { Header as StyledHeader } from '../styles/Header';
import LinkButton from './LinkButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader>
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
          <LinkButton to="/login" text="Entrar" color="#F4B400" />
        </NavItems>
      </Navbar>
    </StyledHeader>
  );
};

export default Header;
