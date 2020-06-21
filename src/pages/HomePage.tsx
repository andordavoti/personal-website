import React from 'react';

// components
import TopIntro from '../components/TopIntro/top-intro.component';
import Skills from '../components/Skills';
import Projects from '../components/ProjectsGrid';

const HomePage: React.FC = () => {
    return (
        <>
            <TopIntro />
            <Skills />
            <Projects />
        </>
    );
};

export default HomePage;
