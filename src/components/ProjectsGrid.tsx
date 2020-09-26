import React, { useState, useEffect } from 'react';
import ProjectItem from './ProjectItem';
import { Container, Grid, Box } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup/ButtonGroup';
import Button from '@material-ui/core/Button/Button';

import { makeStyles } from '@material-ui/core/styles';
import { paletteDark } from '../lib/colors';
import { projects } from '../lib/data';
import { ProjectCategory } from '../lib/types';

const useStyles = makeStyles((theme) => ({
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
    activeCategory: {
        color: theme.palette.text.primary,
    },
    inActiveCategory: {
        color: paletteDark.text.secondary,
    },
}));

const Projects: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<'all' | ProjectCategory>('all');
    const [activeProjects, setActiveProjects] = useState(projects);

    useEffect(() => {
        filterProjects(activeCategory);
    }, [activeCategory]);

    const filterProjects = (category: 'all' | ProjectCategory) => {
        if (category === 'all') {
            setActiveProjects(projects);
        } else {
            const filteredProjects = projects.filter((project) => project.categories.includes(category));
            setActiveProjects(filteredProjects);
        }
    };

    const styles = useStyles();

    const categories: ('all' | ProjectCategory)[] = ['all', 'mobile', 'web', 'hardware', 'personal', 'work'];

    return (
        <Box className={styles.container}>
            <Typography color="textPrimary" align="center" variant="h3">
                Projects:
            </Typography>

            <Box m="1rem" />

            <div>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    {categories.map((category) => (
                        <Button
                            className={category === activeCategory ? styles.activeCategory : styles.inActiveCategory}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </ButtonGroup>
            </div>

            <Box m="0.5rem" />

            <Container maxWidth="lg">
                <Grid container className={styles.projects}>
                    {activeProjects.map(({ path, name, subtitle, date, imgUrl }) => {
                        return <ProjectItem key={name} {...{ path, name, subtitle, date, imgUrl }} />;
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
