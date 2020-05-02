import React from 'react'
import './HeaderMobile.styles.scss'

//Components
import Navbar from './Navbar/Navbar.component'
import NavItemIcon from './Navbar/NavItemIcon/NavItemIcon.component'
import DropdownMenu from './DropdownMenu/DropdownMenu.component'
import { GoChevronDown } from 'react-icons/go'

const HeaderMobile: React.FC = () => (
    <div className='header'>
        <Navbar>
            <div className='title-container'>
                <h1 className='title'>Andor Davoti</h1>
            </div>
            <NavItemIcon isDropdown icon={<GoChevronDown />}><DropdownMenu /></NavItemIcon>
        </Navbar>
    </div>
)

export default HeaderMobile