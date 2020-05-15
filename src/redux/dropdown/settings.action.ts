import { HIDE_DROPDOWN, SET_THEME } from './settings.types';
import { ThemeType } from '../../lib/types';

export const setTheme = (value: ThemeType) => ({
    type: SET_THEME,
    payload: value,
});

export const hideDropdown = (value: boolean) => ({
    type: HIDE_DROPDOWN,
    payload: value,
});
