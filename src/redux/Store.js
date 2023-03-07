import { createStore, combineReducers } from 'redux';
import ThemeChangeReducer from './reducers/ThemesReducer';
import ColorChangeReducer from './reducers/ColorsReducer';
import AddThemeReducer from './reducers/ThemesListReducer';

const rootReducer = combineReducers({ ThemeChangeReducer, ColorChangeReducer, AddThemeReducer });
export const store = createStore(rootReducer);