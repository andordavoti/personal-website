import React, { useEffect, useMemo } from 'react';
import { Container, Box, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import projects from '../lib/data/projects';
import { motion } from 'framer-motion';

interface Props {
    match: any;
}

const useStyles = makeStyles((theme) => ({
    bold: {
        fontWeight: 'bold',
    },
    img: {
        width: '75%',
        maxWidth: 400,
        borderRadius: 10,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: theme.palette.type === 'light' ? `1px solid ${theme.palette.text.primary}` : 'transparent',
    },
    storeButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    storeIcon: {
        width: 250,
        margin: 10,
    },
}));

const ProjectDetailsPage: React.FC<Props> = ({ match }) => {
    const styles = useStyles();

    const activeProject = useMemo(() => projects.find((project) => project.path === match.params.projectId), [match]);

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const renderLinks = () => {
        if (activeProject.links) {
            return (
                <>
                    <Box m="1rem" />

                    <Typography className={styles.bold} color="textPrimary" variant="h5">
                        Links:
                    </Typography>

                    {activeProject.links.map((link) => (
                        <div key={link.name}>
                            <Box m="1rem" />
                            <Typography className={styles.bold} color="textPrimary" variant="body1">
                                {link.name}:{' '}
                                <Link
                                    style={{ wordWrap: 'break-word', fontWeight: 'normal' }}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    color="textSecondary"
                                    href={link.link}
                                >
                                    {link.link}
                                </Link>
                            </Typography>
                        </div>
                    ))}
                </>
            );
        }
    };

    const renderTechnologiesUsed = () => {
        if (activeProject.technologies) {
            return (
                <>
                    <Box m="2rem" />

                    <Box style={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography className={styles.bold} color="textPrimary" variant="h5">
                            Technologies used:
                        </Typography>

                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                            {activeProject.technologies.map((technology, index: number) => (
                                <Typography key={technology.name}>
                                    <Link
                                        style={{ marginRight: 5 }}
                                        color="textSecondary"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href={technology.link}
                                    >
                                        {technology.name}
                                        {index !== activeProject.technologies.length - 1 ? ', ' : ''}
                                    </Link>
                                </Typography>
                            ))}
                        </div>
                    </Box>
                </>
            );
        }
    };

    const renderAppBadges = () => {
        if (activeProject.appStoreUrl || activeProject.playStoreUrl || activeProject.webAppUrl)
            return (
                <>
                    <Box m="2rem" />

                    <Box className={styles.storeButtonContainer}>
                        {activeProject.playStoreUrl ? (
                            <Link rel="noopener noreferrer" target="_blank" href={activeProject.playStoreUrl}>
                                <img
                                    className={styles.storeIcon}
                                    src={require('../assets/icons/badges/google-play-badge.png')}
                                    alt="Play Store Link"
                                />
                            </Link>
                        ) : null}

                        {activeProject.appStoreUrl ? (
                            <Link rel="noopener noreferrer" target="_blank" href={activeProject.appStoreUrl}>
                                <img
                                    className={styles.storeIcon}
                                    src={require('../assets/icons/badges/app-store-badge.svg')}
                                    alt="App Store Link"
                                />
                            </Link>
                        ) : null}

                        {activeProject.webAppUrl ? (
                            <Link rel="noopener noreferrer" target="_blank" href={activeProject.webAppUrl}>
                                <img
                                    className={styles.storeIcon}
                                    src={require('../assets/icons/badges/web-app-badge.png')}
                                    alt="Web App Link"
                                />
                            </Link>
                        ) : null}
                    </Box>
                </>
            );
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <Box style={{ padding: '2rem' }}>
                <Typography color="textPrimary" align="center" variant="h3">
                    {activeProject.name}
                </Typography>

                <Box m="0.5rem" />

                <Typography color="textSecondary" align="center" variant="h5">
                    {activeProject.date}
                </Typography>

                <Box m="1rem" />

                <img className={styles.img} src={activeProject.imgUrl} alt="tic-tac-toe" />

                <Box m="2rem" />

                <Container maxWidth="md">
                    {activeProject.description.map((paragraph: string) => (
                        <div key={paragraph}>
                            <Typography color="textPrimary" variant="body1">
                                {paragraph}
                            </Typography>
                            <Box m="1rem" />
                        </div>
                    ))}
                    {renderLinks()}
                    {renderTechnologiesUsed()}
                    {renderAppBadges()}
                </Container>
            </Box>
        </motion.div>
    );
};

export default ProjectDetailsPage;
