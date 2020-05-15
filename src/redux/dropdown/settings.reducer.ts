import { HIDE_DROPDOWN, SET_THEME } from './settings.types';
import { ThemeType } from '../../lib/types';

const INITIAL_STATE = {
    theme: 'light',
    dropdownHidden: true,
};

export interface SettingsState {
    theme: ThemeType;
    dropdownHidden: boolean;
}

const settingsReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                theme: action.payload,
            };
        case HIDE_DROPDOWN:
            return {
                ...state,
                dropdownHidden: action.payload,
            };
        default:
            return state;
    }
};

export default settingsReducer;
