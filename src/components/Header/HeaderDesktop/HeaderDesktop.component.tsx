import React from 'react';
import './HeaderDesktop.styles.scss';

//Components
import Navbar from '../Navbar/Navbar.component';
import DropdownMenu from './DropdownMenu/DropdownMenu.component';
import NavItemText from './NavItemText/NavItemText.component';

const HeaderDesktop: React.FC = () => (
    <div className="header">
        <Navbar>
            <div className="title-container">
                <h1 className="title">Andor Davoti</h1>
            </div>

            <NavItemText label="Home" />
            <NavItemText label="Projects" />

            <NavItemText label="Contact" isDropdown>
                <DropdownMenu />
            </NavItemText>
        </Navbar>
    </div>
);

export default HeaderDesktop;
