import * as actionTypes from './actionTypes';

const defaultState = {
    companyName: null,
    tagLine: null,
    isFetching: false,
    icons: []
};

export function logoReducer (state, action) {
    switch (action.type) {

        case actionTypes.SET_LOGO_TEXT:

            return Object.assign({}, state, {
                companyName: action.logoText[0],
                tagLine: action.logoText[1]
            });

        case actionTypes.REQUEST_ICONS:
            return Object.assign({}, state, {
                isFetching: true
            });

        case actionTypes.RECEIVE_ICONS:
            return Object.assign({}, state, {
                isFetching: false,
                icons: action.icons
            });

        default:
            return defaultState;
    }
}

export default logoReducer;