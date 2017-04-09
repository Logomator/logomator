import * as actionTypes from './actionTypes';

const defaultState = {
    companyName: null,
    tagLine: null,
    logos: [],
    text: null
};
export function setLogoText (state, action) {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_LOGO_TEXT:
            return Object.assign({}, state, {
                companyName: action.logoText[0],
                tagLine: action.logoText[1]
            });

        default:
            return defaultState;
    }
}

export default setLogoText;