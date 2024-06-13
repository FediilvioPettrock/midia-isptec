import React from 'react';
import styles from '../styles/LeftNavbar.module.css';
import { NavItem } from '../styles/Navbar';


const LeftNav = () => {
    return (
        <nav className={ styles.left_navbar }>
            <ul>
                <li><NavItem to="/">Criar grupo</NavItem></li>
                <li><NavItem to="/">Meus grupos</NavItem></li>
                <li><NavItem to="/profile">Playlist</NavItem></li>
            </ul>
        </nav>

    );

};

export default LeftNav;
