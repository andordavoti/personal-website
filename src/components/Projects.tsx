import React from 'react';
import ProjectItem from './ProjectItem';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { projects } from '../lib/data';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: 40,
        flexDirection: 'column',
    },
    projects: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    },
});

const Projects: React.FC = () => {
    const styles = useStyles();

    return (
        <Box className={styles.container}>
            <Typography color="textPrimary" align="center" variant="h3">
                Projects:
            </Typography>

            <Box m="1rem" />

            <Grid container className={styles.projects}>
                {projects.map((project) => {
                    const { name, description, date, imgUrl } = project;
                    return <ProjectItem key={name} {...{ name, description, date, imgUrl }} />;
                })}
            </Grid>
        </Box>
    );
};

export default Projects;
