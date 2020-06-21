import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Typography, Container } from '@material-ui/core';

import Navbar from '../Navbar';
import NavItemIcon from './NavItemIcon/NavItemIcon.component';
import DropdownMenu from './DropdownMenu/DropdownMenu.component';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: theme.palette.background.paper,
    },
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
}));

const HeaderMobile: React.FC = () => {
    const styles = useStyles();
    return (
        <Container className={styles.header}>
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
        </Container>
    );
};

export default HeaderMobile;
