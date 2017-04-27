import * as actionTypes from './actionTypes';
import logoInspiration from '../assets/images/logo-inspirations/GunarBolf.png';

const defaultState = {
    companyName: '',
    tagline: '',
    industry: '',
    companyDescription: '',
    isFetching: false,
    icons: [],
    inspirations: [ // This data will be fetched via our API eventually.
        {   id: 0,
            img: logoInspiration,
            isSelected: false
        },
        {
            id: 1,
            img: logoInspiration,
            isSelected: false
        },
        {
            id: 2,
            img: logoInspiration,
            isSelected: false
        },
        {
            id: 3,
            img: logoInspiration,
            isSelected: false
        },
        {
            id: 4,
            img: logoInspiration,
            isSelected: false
        },
        {
            id: 5,
            img: logoInspiration,
            isSelected: false
        }

    ],

    selectedInspirations: []
};

const selectInspiration = (state, action) => {
    if (state.id !== action.inspiration.id) {
        return state;
    }

    return Object.assign({}, state, {
        isSelected: !state.isSelected
    });
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

        case actionTypes.SET_COMPANY_DESCRIPTION:
            return Object.assign({}, state, {
                companyDescription: action.description
            });
        case actionTypes.SELECT_LOGO_INSPIRATION:
            return {
                ...state,
                inspirations: state.inspirations.map(i =>
                    selectInspiration(i, action, state.inspirations)
                )
            };

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