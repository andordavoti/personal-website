import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Typography, Container } from '@material-ui/core';

import './HeaderMobile.styles.scss';

import Navbar from '../Navbar/Navbar.component';
import NavItemIcon from '../NavItemIcon/NavItemIcon.component';
import DropdownMenu from './DropdownMenu/DropdownMenu.component';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles({
    titleContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontWeight: 300,
        color: 'white',
        fontSize: 30,
        fontFamily: 'MustangW01-Regular',
    },
    center: {
        display: 'flex',
        alignItems: 'center',
    },
});

const HeaderMobile: React.FC = () => {
    const styles = useStyles();
    return (
        <div className="header">
            <Navbar>
                <Container className={styles.titleContainer}>
                    <Link to="/">
                        <Typography className={styles.title} variant="h1">
                            Andor Davoti
                        </Typography>
                    </Link>
                </Container>

                <NavItemIcon isDropdown icon={<KeyboardArrowDownIcon />}>
                    <DropdownMenu />
                </NavItemIcon>
            </Navbar>
        </div>
    );
};

export default HeaderMobile;
