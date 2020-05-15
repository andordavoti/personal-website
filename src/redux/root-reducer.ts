import { combineReducers } from 'redux';
import settingsReducer, { SettingsState } from './dropdown/settings.reducer';

const rootReducer = combineReducers({
    settings: settingsReducer,
});

export default rootReducer;

export interface AppState {
    settings: SettingsState;
}
