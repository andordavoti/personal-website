import { createSelector } from 'reselect';
import { AppState } from '../root-reducer';

const selectSettingsState = (state: AppState) => state.settings;

export const selectSettings = createSelector(
    [selectSettingsState],
    (settings) => settings
);

export const selectTheme = createSelector(
    [selectSettingsState],
    (settings) => settings.theme
);

export const selectDropdown = createSelector(
    [selectSettingsState],
    (settings) => settings.dropdownHidden
);
