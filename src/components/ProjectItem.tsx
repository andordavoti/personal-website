import React from 'react';
import { useHistory } from 'react-router-dom';

import { Box, Button, Typography, makeStyles } from '@material-ui/core';
import { ProjectObjType } from '../lib/types';

type Props = Pick<ProjectObjType, 'id' | 'date' | 'name' | 'imgUrl' | 'subtitle'>;

const useStyles = makeStyles((theme) => ({
    container: {
        width: 210,
        height: 'auto',
        backgroundColor: theme.palette.background.paper,
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '1.5rem',
    },
    img: {
        width: 200,
        borderRadius: 10,
    },
    subtitle: {
        width: 200,
        height: 70,
    },
}));

const ProjectItem: React.FC<Props> = ({ id, name, subtitle, date, imgUrl }) => {
    const styles = useStyles();

    const history = useHistory();

    return (
        <Box className={styles.container} m={3}>
            <Typography color="textPrimary" align="center" variant="h6">
                {name}
            </Typography>

            <Box m="0.5rem" />

            <Typography className={styles.subtitle} color="textPrimary" variant="body2">
                {subtitle}
            </Typography>

            <Box m="0.5rem" />

            <Typography color="textSecondary" align="center" variant="body2">
                {date}
            </Typography>

            <Box m="0.5rem" />

            <img className={styles.img} src={imgUrl} alt={name} />

            <Box m="0.5rem" />

            <Button color="primary" variant="outlined" onClick={() => history.push(`/${id}`)}>
                Learn more
            </Button>
        </Box>
    );
};

export default ProjectItem;
