import React from 'react'
import './Navbar.styles.scss'

const Navbar: React.FC = ({ children }) => (
    <nav className="navbar">
        <ul className="nav">{children}</ul>
    </nav>
)

export default Navbar