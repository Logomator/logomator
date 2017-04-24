import * as actionTypes from './actionTypes';

const defaultState = {
    companyName: '',
    tagline: '',
    industry: '',
    isFetching: false,
    icons: []
};

export function logoReducer (state, action) {
    switch (action.type) {

        case actionTypes.SET_COMPANY_NAME:
            return Object.assign({}, state, {
                companyName: action.name
            });

        case actionTypes.SET_TAGLINE_TEXT:
            return Object.assign({}, state, {
                tagline: action.tagline
            });

        case actionTypes.SET_INDUSTRY_NAME:
            return Object.assign({}, state, {
                industry: action.industry
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