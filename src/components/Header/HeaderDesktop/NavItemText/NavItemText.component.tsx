import React from 'react'
import './NavItemText.styles.scss'

const NavItemText: React.FC = ({ children }) => {

    return <li className="nav-item-text">
        <p className='text-button'>{children}</p>
    </li>
}

export default NavItemText