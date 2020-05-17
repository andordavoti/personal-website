import React from 'react';
import './index.css';

import Header from './components/Header/Header.component';
import TopIntro from './components/TopIntro/top-intro.component';
import useMediaQuery from './lib/useMediaQuery';
import { useDispatch } from 'react-redux';
import { setTheme } from './redux/dropdown/settings.action';

const App: React.FC = () => {
    const dispatch = useDispatch();

    const darkModeSet = useMediaQuery('(prefers-color-scheme: dark)');

    if (darkModeSet) dispatch(setTheme('dark'));
    else dispatch(setTheme('light'));

    return (
        <>
            <Header />
            <TopIntro />
        </>
    );
};

export default App;
