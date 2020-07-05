import { PaletteOptions } from '@material-ui/core/styles/createPalette';

export const paletteDark: PaletteOptions = {
    type: 'dark',
    primary: {
        main: '#ffffff',
    },
    secondary: {
        main: '#b5b5b5',
    },
    text: {
        primary: '#ffffff',
        secondary: '#b5b5b5',
    },
    background: {
        default: '#151616',
        paper: '#242526',
    },
};

// change these values
export const paletteLight: PaletteOptions = {
    type: 'light',
    primary: {
        main: '#ffffff',
    },
    secondary: {
        main: '#b5b5b5',
    },
    text: {
        primary: '#b5b5b5',
        secondary: '#ffffff',
    },
    background: {
        default: '#ffffff',
        paper: '#d9d9d9',
    },
};
