import React from 'react';
import { useHistory } from 'react-router-dom';

import { Box, Typography, makeStyles, Card } from '@material-ui/core';
import { ProjectType } from '../lib/types';

type Props = Pick<ProjectType, 'path' | 'date' | 'name' | 'imgUrl' | 'subtitle'>;

const useStyles = makeStyles((theme) => ({
    container: {
        width: 250,
        height: 'auto',
        backgroundColor: theme.palette.background.paper,
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '1.5rem',
        boxShadow: '0',
        margin: '1rem',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.05)',
        },
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

const ProjectItem: React.FC<Props> = ({ path, name, subtitle, date, imgUrl }) => {
    const styles = useStyles();

    const history = useHistory();

    return (
        <Card variant="outlined" className={styles.container} onClick={() => history.push(`project/${path}`)}>
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
        </Card>
    );
};

export default ProjectItem;
