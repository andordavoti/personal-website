import React, { useEffect } from 'react';
import { Container, Box, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { projects } from '../lib/data';
import { TechnologyType, LinkType } from '../lib/types';
import { useLocation } from 'react-router-dom';

interface Props {
    match: any;
}

const useStyles = makeStyles({
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
});

const ProjectDetails: React.FC<Props> = ({ match }) => {
    const styles = useStyles();

    const project = projects[match.params.id];

    const renderLinks = () => {
        if (project.links) {
            return (
                <>
                    <Box m="2rem" />

                    <Typography className={styles.bold} color="textPrimary" variant="h5">
                        Links:
                    </Typography>

                    {project.links.map((link: LinkType) => (
                        <div key={link.name}>
                            <Box m="1rem" />
                            <Typography className={styles.bold} color="textPrimary" variant="body1">
                                {link.name}:{' '}
                                <Link rel="noopener noreferrer" target="_blank" color="textSecondary" href={link.link}>
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

                    <Box style={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography className={styles.bold} color="textPrimary" variant="h5">
                            Technologies used:
                        </Typography>

                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                            {project.technologies.map((technology: TechnologyType, index: number) => (
                                <Typography key={technology.name}>
                                    <Link
                                        style={{ marginRight: 5 }}
                                        color="textSecondary"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href={technology.link}
                                    >
                                        {technology.name}
                                        {index !== project.technologies.length - 1 ? ', ' : ''}
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
        <Box style={{ margin: '2rem' }}>
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

export default ProjectDetails;
