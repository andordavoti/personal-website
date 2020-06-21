import React from 'react';
import ProjectItem from './ProjectItem';
import { Container, Grid, Box } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { projects } from '../lib/data';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40,
        flexDirection: 'column',
    },
    projects: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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

            <Container maxWidth="lg">
                <Grid container className={styles.projects}>
                    {Object.values(projects).map((project) => {
                        const { id, name, subtitle, date, imgUrl } = project;
                        console.log(project);
                        return <ProjectItem key={name} {...{ id, name, subtitle, date, imgUrl }} />;
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
