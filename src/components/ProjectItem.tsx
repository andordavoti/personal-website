import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ProjectType } from '../lib/types';

type Props = Pick<ProjectType, 'date' | 'name' | 'imgUrl' | 'subtitle'>;

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

const ProjectItem: React.FC<Props> = ({ name, subtitle, date, imgUrl }) => {
    const styles = useStyles();

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

            <img className={styles.img} src={imgUrl[0]} alt={name} />

            <Box m="0.5rem" />

            <Button color="primary" variant="outlined">
                Learn more
            </Button>
        </Box>
    );
};

export default ProjectItem;
