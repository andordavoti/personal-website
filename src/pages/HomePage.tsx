import React from 'react';
import TopIntro from '../components/TopIntro';
import Projects from '../components/ProjectsGrid';
import { makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';

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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.container}
        >
            <TopIntro />
            <Projects />
        </motion.div>
    );
};

export default HomePage;
