import { SELECT_COLOR_PALETTE } from './actionTypes';

export const selectPalette = (name) => {
    return {type: SELECT_COLOR_PALETTE, name };
};