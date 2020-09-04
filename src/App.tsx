import React, { useMemo } from 'react';
import './index.css';

import { Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { useMediaQuery, createMuiTheme } from '@material-ui/core';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import ErrorBoundary from './components/ErrorBoundary';
import { paletteDark, paletteLight } from './lib/colors';

const App: React.FC = () => {
    const darkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(() => createMuiTheme({ palette: darkMode ? paletteDark : paletteLight }), [darkMode]);

    return (
        <ThemeProvider theme={theme}>
            <div
                className="content-wrapper"
                style={{
                    backgroundColor: darkMode ? paletteDark.background.default : paletteLight.background.default,
                }}
            >
                <Header />
                <ErrorBoundary>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/:projectId" component={ProjectDetailsPage} />
                    </Switch>
                </ErrorBoundary>
            </div>
            <Footer />
        </ThemeProvider>
    );
};

export default App;
