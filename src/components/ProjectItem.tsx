import React from 'react';
import { useHistory } from 'react-router-dom';

import { Box, Button, Typography, makeStyles, Card } from '@material-ui/core';
import { ProjectType } from '../lib/types';

type Props = Pick<ProjectType, 'path' | 'date' | 'name' | 'imgUrl' | 'subtitle'>;

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
        border: theme.palette.type === 'light' ? `1px solid ${theme.palette.text.primary}` : 'transparent',
    },
    subtitle: {
        width: 200,
        height: 70,
    },
}));

const ProjectItem: React.FC<Props> = ({ path, name, subtitle, date, imgUrl }) => {
    const styles = useStyles();

    const history = useHistory();

    return (
        <Card variant="outlined" className={styles.container}>
            <Typography color="textPrimary" align="center" variant="h6">
                {name}
            </Typography>

            <Box m="0.5rem" />

            <Typography className={styles.subtitle} color="textPrimary" variant="body2">
                {subtitle}
            </Typography>

            <Box m="0.5rem" />

            <Typography color="textPrimary" align="center" variant="body2">
                {date}
            </Typography>

            <Box m="0.5rem" />

            <img className={styles.img} src={imgUrl} alt={name} />

            <Box m="0.5rem" />

            <Button color="secondary" variant="outlined" onClick={() => history.push(`/${path}`)}>
                Learn more
            </Button>
        </Card>
    );
};

export default ProjectItem;
