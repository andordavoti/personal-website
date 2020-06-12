import React from 'react';
import './NavItemIcon.styles.scss';
import socialLinks from '../../../../lib/socialLinks';

interface Props {
    icon: JSX.Element;
    link?: string;
}

const NavItemIcon: React.FC<Props> = ({ icon, link }) => {
    return (
        <li className="nav-item-icon">
            <div className="icon-button">
                <a rel="noopener noreferrer" target={link ? '_blank' : ''} href={link ? socialLinks[link] : null}>
                    {icon}
                </a>
            </div>
        </li>
    );
};

export default NavItemIcon;
