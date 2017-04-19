import { combineReducers } from 'redux';
import { logoReducer } from './modules/core/logo/reducer';
import { colorPaletteReducer } from './modules/core/color-palette/reducer';

export default combineReducers({
    colorPaletteReducer,
    logoReducer
});