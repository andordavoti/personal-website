import './index.css';
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { createMuiTheme } from '@material-ui/core';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import ErrorBoundary from './components/ErrorBoundary';
import { palette } from './lib/colors';
import PrivacyPage from './pages/PrivacyPage';
import { AnimatePresence } from 'framer-motion';

const theme = createMuiTheme({ palette });

const App: React.FC = () => {
    const location = useLocation();
    return (
        <ThemeProvider theme={theme}>
            <div className="content-wrapper" style={{ backgroundColor: palette.background.default }}>
                <Header />
                <ErrorBoundary>
                    <AnimatePresence exitBeforeEnter initial={false}>
                        <Switch location={location} key={location.pathname}>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/project/:projectId" component={ProjectDetailsPage} />
                            <Route exact path="/privacy/:projectId" component={PrivacyPage} />
                        </Switch>
                    </AnimatePresence>
                </ErrorBoundary>
            </div>
            <Footer />
        </ThemeProvider>
    );
};

export default App;
