import React from 'react';
import { Container, Box, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: '2rem',
    },
    bold: {
        fontWeight: 'bold',
    },
    img: {
        width: 400,
        borderRadius: 10,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    list: {
        color: theme.palette.primary.main,
    },
    listItem: {
        marginTop: 10,
    },
    listItemLink: {
        marginLeft: 5,
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

    return (
        <Box className={styles.container}>
            <Typography color="textPrimary" align="center" variant="h3">
                Tic Tac Toe – Online
            </Typography>

            <Box m="2rem" />

            <img className={styles.img} src={require('../assets/img/tic-tac-toe.jpg')} alt="tic-tac-toe" />

            <Box m="2rem" />

            <Container maxWidth="md">
                <Typography className={styles.bold} color="textPrimary" align="left" variant="h5">
                    Description:
                </Typography>

                <Box m="1rem" />

                <Typography color="textPrimary" variant="body1">
                    Open-source cross-platform mobile (iOS and android) online multiplayer game, built using React
                    Native, Redux, Expo, Firestore and Firebase Cloud functions. Play Tic Tac Toe cross-platform. Both
                    online and in-person with your friends. We don't require you to create an account. Instead, we
                    utilize anonymous lobby id's. Therefore only you and the one you're playing with online know who is
                    playing with who.
                </Typography>

                <Box m="1rem" />

                <Typography color="textPrimary" variant="body1">
                    Github repo:{' '}
                    <Link color="textSecondary" href="https://github.com/andordavoti/tic-tac-toe-app">
                        https://github.com/andordavoti/tic-tac-toe-app{' '}
                    </Link>
                </Typography>

                <Box m="1rem" />

                <Typography color="textPrimary" variant="body1">
                    Simple landing page and privacy policy made with preact:{' '}
                    <Link color="textSecondary" href="https://ticktacktoe-7aa6d.web.app/">
                        https://ticktacktoe-7aa6d.web.app/
                    </Link>
                </Typography>

                <Box m="2rem" />

                <Box className={styles.list}>
                    <Typography className={styles.bold} color="textPrimary" align="left" variant="h5">
                        Technologies used:
                    </Typography>

                    <Box m="1rem" />

                    <Typography className={styles.listItem}>
                        <SubdirectoryArrowRightIcon color="secondary" />
                        <Link
                            className={styles.listItemLink}
                            color="textSecondary"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="" // add link here
                        >
                            Typescript
                        </Link>
                    </Typography>

                    <Typography className={styles.listItem}>
                        <SubdirectoryArrowRightIcon color="secondary" />
                        <Link
                            className={styles.listItemLink}
                            color="textSecondary"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="" // add link here
                        >
                            React
                        </Link>
                    </Typography>

                    <Typography className={styles.listItem}>
                        <SubdirectoryArrowRightIcon color="secondary" />
                        <Link
                            className={styles.listItemLink}
                            color="textSecondary"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="" // add link here
                        >
                            Preact
                        </Link>
                    </Typography>

                    <Typography className={styles.listItem}>
                        <SubdirectoryArrowRightIcon color="secondary" />
                        <Link
                            className={styles.listItemLink}
                            color="textSecondary"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="" // add link here
                        >
                            Redux
                        </Link>
                    </Typography>

                    <Typography className={styles.listItem}>
                        <SubdirectoryArrowRightIcon color="secondary" />
                        <Link
                            className={styles.listItemLink}
                            color="textSecondary"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="" // add link here
                        >
                            React Native
                        </Link>
                    </Typography>
                    <Typography className={styles.listItem}>
                        <SubdirectoryArrowRightIcon color="secondary" />
                        <Link
                            className={styles.listItemLink}
                            color="textSecondary"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="" // add link here
                        >
                            Expo
                        </Link>
                    </Typography>
                    <Typography className={styles.listItem}>
                        <SubdirectoryArrowRightIcon color="secondary" />
                        <Link
                            className={styles.listItemLink}
                            color="textSecondary"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="" // add link here
                        >
                            Firebase
                        </Link>
                    </Typography>
                </Box>

                <Box className={styles.storeButtonContainer}>
                    <Link
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://apps.apple.com/us/app/tic-tac-toe-online/id1513609441?ls=1"
                    >
                        <img
                            className={styles.storeIcon}
                            src={require('../assets/icons/app-store-badge.svg')}
                            alt="App Store Link"
                        />
                    </Link>

                    <Link
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://play.google.com/store/apps/details?id=com.andordavoti.tictactoe.game"
                    >
                        <img
                            className={styles.storeIcon}
                            src={require('../assets/icons/google-play-badge.png')}
                            alt="Play Store Link"
                        />
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default ProjectPage;
