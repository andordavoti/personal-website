import React from 'react';
import { Box, Typography, makeStyles, Card } from '@material-ui/core';
import projects from '../lib/data/projects';

const useStyles = makeStyles((theme) => ({
    container: {
        width: 250,
        height: 'auto',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.background.paper : theme.palette.background.default,
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '1.5rem',
        boxShadow: theme.palette.type === 'light' ? '10px 10px 8px #DDDDDD' : '0',
        elevation: 100,
        margin: '1rem',
    },
    img: {
        width: 225,
        borderRadius: 10,
        border: `0.1px solid ${theme.palette.text.secondary}`,
    },
    subtitleContainer: {
        display: 'flex',
        width: 200,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const Experience = () => {
    const styles = useStyles();

    const { name, subtitle, date, imgUrl } = projects[1];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Typography color="textPrimary" align="center" variant="h3">
                Experience:
            </Typography>

            <Box m="1rem" />

            <Card variant="outlined" className={styles.container}>
                <Typography color="textPrimary" align="center" variant="h6">
                    {name}
                </Typography>

                <Box m="0.5rem" />

                <div className={styles.subtitleContainer}>
                    <Typography color="textPrimary" variant="body2">
                        {subtitle}
                    </Typography>
                </div>

                <Box m="0.5rem" />

                <Typography color="textPrimary" align="center" variant="body2">
                    {date}
                </Typography>

                <Box m="0.5rem" />

                <img className={styles.img} src={imgUrl} alt={name} />

                <Box m="0.5rem" />
            </Card>
        </div>
    );
};

export default Experience;
