import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderDesktop.styles.scss';

// Components
import Navbar from '../Navbar/Navbar.component';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import socialLinks from '../../../lib/socialLinks';
import { SocialLinkType } from '../../../lib/types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    center: {
        display: 'flex',
        alignItems: 'center',
    },
}));

const HeaderDesktop: React.FC = () => {
    const styles = useStyles();
    return (
        <div className="header">
            <Navbar>
                <div className="title-container">
                    <h1 className="title">Andor Davoti</h1>
                </div>

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
        </div>
    );
};

export default HeaderDesktop;
