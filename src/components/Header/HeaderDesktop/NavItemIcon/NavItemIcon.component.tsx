import React from 'react';
import './NavItemIcon.styles.scss';
import socialLinks from '../../../../lib/socialLinks';
import { SocialLinkType } from '../../../../lib/types';

interface Props {
    icon: JSX.Element;
    link?: SocialLinkType;
}

const NavItemIcon: React.FC<Props> = ({ icon, link }) => {
    return (
        <li className="nav-item-icon">
            <div className="icon-button">
                <a rel="noopener noreferrer" target={link ? '_blank' : ''} href={link ? socialLinks[link] : undefined}>
                    {icon}
                </a>
            </div>
        </li>
    );
};

export default NavItemIcon;
