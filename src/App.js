import React, { useState, useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { firestore } from './firebase/firebase.utils';
//Dark
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import { useMediaPredicate } from 'react-media-hook';
import storage from 'local-storage-fallback';
//Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Homepage/HomePage';
import Project from './pages/Project/Project';

//Context
import { ProjectContext } from './context';

const App = () => {
    const prefers = useMediaPredicate('(prefers-color-scheme: dark)');
    const getTheme = () => {
        const savedTheme = storage.getItem('dark');
        return savedTheme ? JSON.parse(savedTheme) : prefers;
    };

    //Setting state
    const [dark, setDark] = useState(getTheme);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const unsubscribe = firestore
            .collection('projects')
            .orderBy('date', 'desc')
            .onSnapshot(snapshot => {
                if (snapshot.size) {
                    const snapshotReturn = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data(),
                    }));

                    const normalized = {};
                    for (const { id, ...rest } of snapshotReturn) {
                        normalized[id] = { id, ...rest };
                    }

                    setProjects(normalized);
                }
            });

        return () => {
            unsubscribe();
        };
    }, []);

    //Function to toggle dark mode, passed into ContextAPI via theme provider.
    const toggleDarkMode = () => {
        storage.setItem('dark', JSON.stringify(!dark));
        setDark(!dark);
    };

    return (
        <ThemeProvider
            theme={{ mode: dark ? 'dark' : 'light', dark, toggleDarkMode }}
        >
            <>
                <GlobalStyle />

                <Router>
                    <React.Fragment>
                        <div className="content">
                            <Header />

                            <Switch>
                                <ProjectContext.Provider value={projects}>
                                    <Route
                                        exact
                                        path="/"
                                        component={HomePage}
                                    />

                                    <Route
                                        path="/project/:id"
                                        component={Project}
                                    />
                                </ProjectContext.Provider>
                            </Switch>
                        </div>
                        <Footer />
                    </React.Fragment>
                </Router>
            </>
        </ThemeProvider>
    );
};

export default App;
