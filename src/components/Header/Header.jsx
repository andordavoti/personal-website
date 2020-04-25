import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import DarkToggle from '../DarkToggle/DarkToggle';

import {
    HeaderWrapper,
    HeaderContainer,
    Name,
    HeaderNav,
    NavItem,
    DrawerToggle,
    DrawerContent,
    DrawerFooter,
} from './Header.styles';
import { TextHover } from '../Text/TextHover';
import Drawer from '../Drawer/Drawer';

//icons
import { Icon } from '../Icon/Icon';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
//List
import { List } from '../List/List';
import { ListItem } from '../ListItem/ListItem';
import { Spacer } from '../utils/Spacer';
import { Link } from 'react-router-dom';

const socialIcons = {
    linkedin: 'LINK',
    instagram: 'LINK',
    github: 'LINK',
};

const Header = ({ topSpacing = 100 }) => {
    //Shadow on Scroll
    const [scroll, setScroll] = useState(false);

    const handleScroll = React.useCallback(() => {
        if (window.scrollY < topSpacing + 10) {
            setScroll(false);
            return;
        }
        setScroll(true);
    }, [topSpacing]);

    //Add Event Listeners
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    //Drawer
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <React.Fragment>
            <Spacer height={topSpacing + 'px'} />
            <HeaderWrapper className={scroll ? 'scrolled' : null}>
                <HeaderContainer>
                    <Name>Andor Davoti</Name>
                    <DrawerToggle>
                        <Icon onClick={toggleDrawer}>menu</Icon>
                    </DrawerToggle>
                    <HeaderNav>
                        <NavItem>
                            <TextHover>
                                <Link to="/">Home</Link>
                            </TextHover>
                        </NavItem>
                        <NavItem>
                            <TextHover
                                variant="3"
                                as="a"
                                href={socialIcons.linkedin}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <FaLinkedin />
                            </TextHover>
                        </NavItem>
                        <NavItem>
                            <TextHover
                                variant="3"
                                as="a"
                                href={socialIcons.instagram}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <FaInstagram />
                            </TextHover>
                        </NavItem>
                        <NavItem>
                            <TextHover
                                variant="3"
                                as="a"
                                href={socialIcons.github}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <FaGithub />
                            </TextHover>
                        </NavItem>
                        <NavItem>
                            <DarkToggle />
                        </NavItem>
                    </HeaderNav>
                </HeaderContainer>
            </HeaderWrapper>
            {isMobile && (
                <Drawer open={drawerOpen} onClose={toggleDrawer}>
                    <DrawerContent>
                        <List>
                            <Link onClick={() => toggleDrawer()} to="/">
                                <ListItem hover="1">Home</ListItem>
                            </Link>
                        </List>
                    </DrawerContent>
                    <DrawerFooter>
                        <ListItem hover="1" className="iconHolder active">
                            <TextHover
                                variant="2"
                                as="a"
                                href={socialIcons.linkedin}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <FaLinkedin />
                            </TextHover>
                            <TextHover
                                variant="2"
                                as="a"
                                href={socialIcons.instagram}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <FaInstagram />
                            </TextHover>
                            <TextHover
                                variant="2"
                                as="a"
                                href={socialIcons.github}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <FaGithub />
                            </TextHover>
                            <TextHover variant="2">
                                <DarkToggle size="20" />
                            </TextHover>
                        </ListItem>
                    </DrawerFooter>
                </Drawer>
            )}
        </React.Fragment>
    );
};

export default Header;
