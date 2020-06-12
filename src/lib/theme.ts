import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#ffffff',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b5b5b5',
        },
        background: {
            default: '#151616',
            paper: '#242526',
        },
    },
});

export default theme;
