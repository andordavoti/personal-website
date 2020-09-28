import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

const render = (Component) => {
    return ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(NextApp);
    });
}
