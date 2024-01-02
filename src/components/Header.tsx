import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import { makeStyles, Typography, Container, IconButton } from '@material-ui/core';

import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { socialLinks } from '../lib/data/socialLinks';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: theme.palette.background.default,
        minWidth: '100%',
        position: 'sticky',
        top: 0,
        zIndex: 9999,
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

const Header: React.FC = () => {
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

                <div className={styles.center}>
                    <IconButton rel="noopener noreferrer" target="_blank" href={socialLinks.email}>
                        <EmailIcon color="primary" />
                    </IconButton>
                </div>

                <div className={styles.center}>
                    <IconButton rel="noopener noreferrer" target="_blank" href={socialLinks.linkedin}>
                        <LinkedInIcon color="primary" />
                    </IconButton>
                </div>

                <div className={styles.center}>
                    <IconButton rel="noopener noreferrer" target="_blank" href={socialLinks.github}>
                        <GitHubIcon color="primary" />
                    </IconButton>
                </div>
            </Navbar>
        </Container>
    );
};

export default Header;
