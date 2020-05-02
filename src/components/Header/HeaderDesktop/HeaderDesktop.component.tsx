import React from 'react'
import './HeaderDesktop.styles.scss'

//Components
import Navbar from './Navbar/Navbar.component'
import NavItemIcon from './Navbar/NavItemIcon/NavItemIcon.component'
import NavItemText from './Navbar/NavItemText/NavItemText.component'
import DropdownMenu from './DropdownMenu/DropdownMenu.component'
import { GoChevronDown } from 'react-icons/go'

const HeaderDesktop: React.FC = () => (
    <div className='header'>
        <Navbar>
            <div className='title-container'>
                <h1 className='title'>Andor Davoti</h1>
            </div>

            <NavItemText>Home</NavItemText>
            <NavItemText>Projects</NavItemText>
            <NavItemIcon label='Contact' isDropdown icon={<GoChevronDown />}><DropdownMenu /></NavItemIcon>
        </Navbar>
    </div>
)

export default HeaderDesktop