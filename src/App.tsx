import React from 'react';
import './index.css';

// Components
import Header from './components/Header/Header.component';
import TopIntro from './components/TopIntro/top-intro.component';
import Skills from './components/Skills/skills.component';

import useMediaQuery from './lib/useMediaQuery';
import { useDispatch } from 'react-redux';
import { setTheme } from './redux/dropdown/settings.action';
import Projects from './components/Projects/projects.component';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './lib/theme';

const App: React.FC = () => {
    const dispatch = useDispatch();

    const darkModeSet = useMediaQuery('(prefers-color-scheme: dark)');
    if (darkModeSet) dispatch(setTheme('dark'));
    else dispatch(setTheme('light'));

    return (
        <ThemeProvider theme={theme}>
            <div className="app">
                <Header />
                <TopIntro />
                <Skills />
                <Projects />
            </div>
        </ThemeProvider>
    );
};

export default App;
