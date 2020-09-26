import React from 'react';
import ProjectItem from './ProjectItem';
import { Container, Grid, Box } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup/ButtonGroup';
import Button from '@material-ui/core/Button/Button';

import { makeStyles } from '@material-ui/core/styles';
import { projects } from '../lib/data';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
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

            <div>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button>All</Button>
                    <Button>Mobile</Button>
                    <Button>Web</Button>
                    <Button>Personal</Button>
                    <Button>Work</Button>
                </ButtonGroup>
            </div>

            <Box m="0.5rem" />

            <Container maxWidth="lg">
                <Grid container className={styles.projects}>
                    {Object.values(projects).map((project, index) => {
                        const ids = Object.keys(projects);
                        const { name, subtitle, date, imgUrl } = project;
                        return <ProjectItem key={name} id={ids[index]} {...{ name, subtitle, date, imgUrl }} />;
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
