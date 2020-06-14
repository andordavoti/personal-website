import React from 'react';
import './HeaderDesktop.styles.scss';

// Components
import Navbar from '../Navbar/Navbar.component';
import NavItemIcon from './NavItemIcon/NavItemIcon.component';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const HeaderDesktop: React.FC = () => (
    <div className="header">
        <Navbar>
            <div className="title-container">
                <h1 className="title">Andor Davoti</h1>
            </div>

            <NavItemIcon icon={<HomeIcon />} toPath="/" />

            <NavItemIcon icon={<BuildIcon />} toPath="/projects" />

            <NavItemIcon link="email" icon={<EmailIcon />} />
            <NavItemIcon link="linkedin" icon={<LinkedInIcon />} />
            <NavItemIcon link="github" icon={<GitHubIcon />} />
        </Navbar>
    </div>
);

export default HeaderDesktop;
