import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import { SocialLinkType } from '../../lib/types';
import { makeStyles, Typography, Container } from '@material-ui/core';
import { socialLinks } from '../../lib/data';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: theme.palette.background.paper,
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

const HeaderDesktop: React.FC = () => {
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

                <Link to="/" className={styles.center}>
                    <IconButton>
                        <HomeIcon />
                    </IconButton>
                </Link>

                <Link to="/projects" className={styles.center}>
                    <IconButton>
                        <BuildIcon />
                    </IconButton>
                </Link>

                <div className={styles.center}>
                    <IconButton rel="noopener noreferrer" target="_blank" href={socialLinks['email' as SocialLinkType]}>
                        <EmailIcon />
                    </IconButton>
                </div>

                <div className={styles.center}>
                    <IconButton
                        rel="noopener noreferrer"
                        target="_blank"
                        href={socialLinks['linkedin' as SocialLinkType]}
                    >
                        <LinkedInIcon />
                    </IconButton>
                </div>

                <div className={styles.center}>
                    <IconButton
                        rel="noopener noreferrer"
                        target="_blank"
                        href={socialLinks['github' as SocialLinkType]}
                    >
                        <GitHubIcon />
                    </IconButton>
                </div>
            </Navbar>
        </Container>
    );
};

export default HeaderDesktop;
