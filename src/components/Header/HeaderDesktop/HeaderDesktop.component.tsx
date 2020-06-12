import React from 'react';
import './HeaderDesktop.styles.scss';

// Components
import Navbar from '../Navbar/Navbar.component';
import NavItemIcon from './NavItemIcon/NavItemIcon.component';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaHome, FaTools } from 'react-icons/fa';

const HeaderDesktop: React.FC = () => (
    <div className="header">
        <Navbar>
            <div className="title-container">
                <h1 className="title">Andor Davoti</h1>
            </div>

            <NavItemIcon icon={<FaHome />} />
            <NavItemIcon icon={<FaTools />} />
            <NavItemIcon link="email" icon={<MdEmail />} />
            <NavItemIcon link="linkedin" icon={<FaLinkedin />} />
            <NavItemIcon link="github" icon={<FaGithub />} />
        </Navbar>
    </div>
);

export default HeaderDesktop;
