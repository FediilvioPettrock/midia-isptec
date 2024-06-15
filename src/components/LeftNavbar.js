import React from 'react';
import styles from '../styles/LeftNavbar.module.css';
import { NavItem } from '../styles/Navbar';


const LeftNavbar = ({ items }) => {
    return (
        <nav className={ styles.left_navbar }>
            <ul>
                {items.map((item) => (
                    <li>
                    <NavItem to="/">
                        { item.icon }
                        { ' ' + item.text }
                    </NavItem>  
                    </li>
                ))}
            </ul>
        </nav>
    );

};

export default LeftNavbar;
