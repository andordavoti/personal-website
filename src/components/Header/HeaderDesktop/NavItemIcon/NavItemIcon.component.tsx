import React from 'react';
import './NavItemIcon.styles.scss';
import socialLinks from '../../../../lib/socialLinks';
import { SocialLinkType } from '../../../../lib/types';
import { Link } from 'react-router-dom';

interface Props {
    icon: JSX.Element;
    link?: SocialLinkType;
    toPath?: string;
}

const NavItemIcon: React.FC<Props> = ({ icon, link, toPath }) => {
    return (
        <>
            {Boolean(toPath) ? (
                <Link className="nav-item-icon" to={toPath}>
                    <div className="icon-button">{icon}</div>
                </Link>
            ) : (
                <div className="nav-item-icon">
                    <a
                        className="icon-button"
                        rel="noopener noreferrer"
                        target={link ? '_blank' : ''}
                        href={link ? socialLinks[link] : undefined}
                    >
                        {icon}
                    </a>
                </div>
            )}
        </>
    );
};

export default NavItemIcon;
