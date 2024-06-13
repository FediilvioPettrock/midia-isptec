import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

export const NavItem = styled(Link)`
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

export const MenuIcon = styled.div`
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
