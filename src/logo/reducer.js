import * as actionTypes from './actionTypes';

const defaultState = {
    companyName: '',
    tagLine: null,
    isFetching: false,
    icons: []
};

export function logoReducer (state, action) {
    switch (action.type) {

        case actionTypes.SET_COMPANY_NAME:

            return Object.assign({}, state, {
                companyName: action.name
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