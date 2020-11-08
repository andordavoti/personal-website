import React from 'react';

// components
import TopIntro from '../components/TopIntro';
import Skills from '../components/Skills';
import Projects from '../components/ProjectsGrid';
import { makeStyles } from '@material-ui/core';
import Experience from '../components/Experience';

const useStyles = makeStyles({
    container: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 1200,
    },
});

const HomePage: React.FC = () => {
    const styles = useStyles();
    return (
        <div className={styles.container}>
            <TopIntro />
            <Skills />
            <Experience />
            <Projects />
        </div>
    );
};

export default HomePage;
