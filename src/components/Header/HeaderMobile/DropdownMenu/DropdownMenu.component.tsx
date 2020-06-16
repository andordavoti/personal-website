import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.styles.scss';

// icons
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactsIcon from '@material-ui/icons/Contacts';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { CSSTransition } from 'react-transition-group';

// redux
import { useDispatch } from 'react-redux';
import { hideDropdown } from '../../../../redux/dropdown/settings.action';
import socialLinks from '../../../../lib/socialLinks';
import { Typography } from '@material-ui/core';

interface PropsDropdownItem {
    children: JSX.Element | string;
    leftIcon?: JSX.Element | string;
    rightIcon?: JSX.Element;
    goToMenu?: string;
    link?: string;
    toPath?: string;
}

const DropdownMenu: React.FC = () => {
    const dispatch = useDispatch();

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState<number | null>(null);
    const dropdownRef = useRef(null);

    useEffect(() => setMenuHeight(dropdownRef.current.firstChild.offsetHeight), []);

    const calcHeight = (el: HTMLElement) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    };

    const DropdownItem: React.FC<PropsDropdownItem> = ({ children, leftIcon, rightIcon, goToMenu, link, toPath }) => {
        return (
            <>
                {Boolean(toPath) ? (
                    <Typography>
                        <Link to={toPath} className="menu-item">
                            <span className="icon-button">{leftIcon}</span>
                            {children}
                            <span className="icon-right">{rightIcon}</span>
                        </Link>
                    </Typography>
                ) : (
                    <Typography>
                        <a
                            target={link ? '_blank' : ''}
                            href={socialLinks[link]}
                            className="menu-item"
                            onClick={() => goToMenu && setActiveMenu(goToMenu)}
                        >
                            <span className="icon-button">{leftIcon}</span>
                            {children}
                            <span className="icon-right">{rightIcon}</span>
                        </a>
                    </Typography>
                )}
            </>
        );
    };

    return (
        <div
            onMouseLeave={() => dispatch(hideDropdown(true))}
            className="dropdown"
            style={{ height: menuHeight }}
            ref={dropdownRef}
        >
            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight as any}
            >
                <div className="menu">
                    <DropdownItem toPath="/" leftIcon={<HomeIcon />}>
                        Home
                    </DropdownItem>
                    <DropdownItem toPath="/projects" leftIcon={<BuildIcon />}>
                        Projects
                    </DropdownItem>
                    <DropdownItem leftIcon={<ContactsIcon />} rightIcon={<ChevronRightIcon />} goToMenu="contact">
                        Contact
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'contact'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight as any}
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ChevronLeftIcon />}>
                        <h2>Contact</h2>
                    </DropdownItem>
                    <DropdownItem link="email" leftIcon={<EmailIcon />}>
                        Email
                    </DropdownItem>
                    <DropdownItem link="linkedin" leftIcon={<LinkedInIcon />}>
                        LinkedIn
                    </DropdownItem>
                    <DropdownItem link="github" leftIcon={<GitHubIcon />}>
                        Github
                    </DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
};

export default DropdownMenu;
