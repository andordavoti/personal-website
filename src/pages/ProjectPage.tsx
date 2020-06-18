import React from 'react';
import { Container, Box, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { projects } from '../lib/data';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: '2rem',
    },
    bold: {
        fontWeight: 'bold',
    },
    img: {
        width: '50%',
        borderRadius: 10,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    technologiesContainer: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    storeButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    storeIcon: {
        height: 80,
        margin: 10,
    },
}));

const ProjectPage: React.FC = () => {
    const styles = useStyles();

    const project = projects[0];

    const renderLinks = () => {
        if (project.links) {
            return (
                <>
                    <Box m="2rem" />

                    <Typography className={styles.bold} color="textPrimary" variant="h5">
                        Links:
                    </Typography>

                    {project.links.map((link) => (
                        <div key={link.name}>
                            <Box m="1rem" />
                            <Typography className={styles.bold} color="textPrimary" variant="body1">
                                {link.name}:{' '}
                                <Link color="textSecondary" href={link.link}>
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
        if (project.technologies) {
            return (
                <>
                    <Box m="2rem" />

                    <Box className={styles.technologiesContainer}>
                        <Typography className={styles.bold} color="textPrimary" variant="h5">
                            Technologies used:
                        </Typography>

                        {project.technologies.map((technology) => (
                            <Typography key={technology.name}>
                                <Link
                                    style={{ marginLeft: 5 }}
                                    color="textSecondary"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href={technology.link}
                                >
                                    {technology.name}
                                    {', '}
                                </Link>
                            </Typography>
                        ))}
                    </Box>
                </>
            );
        }
    };

    const renderAppBadges = () => {
        if (project.appStoreUrl || project.playStoreUrl || project.webAppUrl)
            return (
                <>
                    <Box m="2rem" />

                    <Box className={styles.storeButtonContainer}>
                        {project.appStoreUrl ? (
                            <Link rel="noopener noreferrer" target="_blank" href={project.appStoreUrl}>
                                <img
                                    className={styles.storeIcon}
                                    src={require('../assets/icons/app-store-badge.svg')}
                                    alt="App Store Link"
                                />
                            </Link>
                        ) : null}

                        {project.playStoreUrl ? (
                            <Link rel="noopener noreferrer" target="_blank" href={project.playStoreUrl}>
                                <img
                                    className={styles.storeIcon}
                                    src={require('../assets/icons/google-play-badge.png')}
                                    alt="Play Store Link"
                                />
                            </Link>
                        ) : null}

                        {project.webAppUrl ? (
                            <Link rel="noopener noreferrer" target="_blank" href={project.webAppUrl}>
                                <img
                                    className={styles.storeIcon}
                                    src={require('../assets/icons/web-app-badge.png')}
                                    alt="Web App Link"
                                />
                            </Link>
                        ) : null}
                    </Box>
                </>
            );
    };

    return (
        <Box className={styles.container}>
            <Typography color="textPrimary" align="center" variant="h3">
                {project.name}
            </Typography>

            <Box m="2rem" />

            <img className={styles.img} src={project.imgUrl[0]} alt="tic-tac-toe" />

            <Box m="2rem" />

            <Container maxWidth="md">
                <Typography color="textPrimary" variant="body1">
                    {project.description}
                </Typography>

                {renderLinks()}
                {renderTechnologiesUsed()}
                {renderAppBadges()}
            </Container>
        </Box>
    );
};

export default ProjectPage;
