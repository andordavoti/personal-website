import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 40,
        [theme.breakpoints.down('sm')]: {
            padding: 10,
        },
    },
    textContainer: {
        width: '40%',
        margin: 10,
        marginRight: 50,
        [theme.breakpoints.down('sm')]: {
            width: '75%',
            marginRight: 10,
        },
    },
    profileImg: {
        width: 200,
        height: 200,
        borderRadius: '50%',
        border: '2px solid white',
        borderColor: theme.palette.text.primary,
        [theme.breakpoints.down('sm')]: {
            margin: '2rem',
        },
    },
}));

const TopIntro: React.FC = () => {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <Box m="2rem" />

                <Typography color="textPrimary" variant="h5">
                    I am a full stack developer from Oslo, Norway.
                </Typography>

                <Box m="2rem" />

                <Typography color="textPrimary" variant="subtitle1">
                    With a passion for building things, I've built several software and hardware projects over the
                    years, which you can check out bellow.
                </Typography>
            </div>
            <img className={styles.profileImg} src={require('../assets/img/profile_img.jpg')} alt="profile" />
        </div>
    );
};

export default TopIntro;
