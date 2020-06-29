import React from 'react';

// components
import TopIntro from '../components/TopIntro';
import Skills from '../components/Skills';
import Projects from '../components/ProjectsGrid';

const HomePage: React.FC = () => {
    return (
        <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: 1200 }}>
            <TopIntro />
            <Skills />
            <Projects />
        </div>
    );
};

export default HomePage;
