import React from 'react';
import './index.css';

import { Switch, Route } from 'react-router-dom';

import useMediaQuery from './lib/useMediaQuery';
import { useDispatch } from 'react-redux';
import { setTheme } from './redux/dropdown/settings.action';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './lib/theme';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';

const App: React.FC = () => {
    const dispatch = useDispatch();

    const darkModeSet = useMediaQuery('(prefers-color-scheme: dark)');
    if (darkModeSet) dispatch(setTheme('dark'));
    else dispatch(setTheme('light'));

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/projects" component={ProjectsPage} />
            </Switch>
            <Footer />
        </ThemeProvider>
    );
};

export default App;
