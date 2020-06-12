import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#151616',
        },
        secondary: {
            main: '#242526',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b5b5b5',
        },
    },
});

export default theme;
