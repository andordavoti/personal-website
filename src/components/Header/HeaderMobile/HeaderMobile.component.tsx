import React from 'react';
import './HeaderMobile.styles.scss';

// components
import Navbar from '../Navbar/Navbar.component';
import NavItemIcon from '../NavItemIcon/NavItemIcon.component';
import DropdownMenu from './DropdownMenu/DropdownMenu.component';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const HeaderMobile: React.FC = () => (
    <div className="header">
        <Navbar>
            <div className="title-container">
                <h1 className="title">Andor Davoti</h1>
            </div>
            <NavItemIcon isDropdown icon={<KeyboardArrowDownIcon />}>
                <DropdownMenu />
            </NavItemIcon>
        </Navbar>
    </div>
);

export default HeaderMobile;
