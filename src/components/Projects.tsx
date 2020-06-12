import React from 'react';
import ProjectItem from './ProjectItem';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import projects from '../lib/projects';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: 40,
        flexDirection: 'column',
    },
    projects: {
        display: 'flex',
        flexDirection: 'row',
    },
}));

const Projects: React.FC = () => {
    const styles = useStyles();

    return (
        <Box className={styles.container}>
            <Typography color="textPrimary" align="center" variant="h3">
                Projects:
            </Typography>
            <Box className={styles.projects}>
                {projects.map((project) => {
                    const { name, description, date, imgUrl } = project;
                    return <ProjectItem key={name} {...{ name, description, date, imgUrl }} />;
                })}
            </Box>
        </Box>
    );
};

export default Projects;
