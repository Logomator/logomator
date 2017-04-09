import { SET_LOGO_TEXT } from './actionTypes';

export const setLogoText = (logoText) => {
    return { type: SET_LOGO_TEXT, logoText }
};