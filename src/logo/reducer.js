import * as actionTypes from './actionTypes';
import logoInspiration1 from '../assets/images/logo-inspirations/text-based-inspiration.png';
import logoInspiration2 from '../assets/images/logo-inspirations/Aerial_Tagline@2x.png';

const defaultState = {
    companyName: '',
    tagline: '',
    industry: '',
    companyDescription: '',
    isFetching: false,
    icons: [],
    inspirations: [ // This data will be fetched via our API eventually.
        {   id: 0,
            img: logoInspiration1,
            isSelected: false
        },
        {
            id: 1,
            img: logoInspiration2,
            isSelected: false
        }

    ],
    palettes: [
        {
            "name": "Blues",
            "hexcodes": ["#84C4F5", "#1C87E1", "#0D5DA0", "#073E75"],
            "isSelected": false
        },
        {
            "name": "Aquas",
            "hexcodes": ["#9AD9E1", "#4BB8C3", "#337683", "#1D5463"],
            "isSelected": false
        },

        {
            "name": "Greens",
            "hexcodes": ["#8AB28B", "#5A935C", "#2B742C", "#005502"],
            "isSelected": false
        },
        {
            "name": "Purples",
            "hexcodes": ["#C7A2D9", "#9D5CBE", "#812EAB", "#660099"],
            "isSelected": false
        },
        {
            "name": "Pinks",
            "hexcodes": ["#E79BCB", "#DF73B6", "#D54AA1", "#CC1F8D"],
            "isSelected": false
        },
        {
            "name": "Reds",
            "hexcodes": ["#E98A89", "#E05B59", "#D72C26", "#CE0000"],
            "isSelected": false
        },
        {
            "name": "Oranges",
            "hexcodes": ["#FFB987", "#FF9D54", "#FF811A", "#FF6600"],
            "isSelected": false
        },
        {
            "name": "Yellows",
            "hexcodes": ["#FFE885", "#FFDF4F", "#FFD600", "#FFCD00"],
            "isSelected": false
        },
        {
            "name": "Browns",
            "hexcodes": ["#938A80", "#6F6356", "#4B3C2C", "#352615"],
            "isSelected": false
        },
        {
            "name": "Neutrals",
            "hexcodes": ["#C4C6CC", "#818691", "#484C53", "#1A191C"],
            "isSelected": false
        }
    ],
    concepts: [],
};

const selectInspiration = (state, action) => {
    if (state.id !== action.inspiration.id) {
        return state;
    }

    return Object.assign({}, state, {
        isSelected: !state.isSelected
    });
};

const selectPalette = (state, action) => {
    if (state.name !== action.name) {
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
                    selectInspiration(i, action)
                )
            };

        case actionTypes.SELECT_COLOR_PALETTE:
            return {
                ...state,
                palettes: state.palettes.map(p =>
                    selectPalette(p, action)
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
        
        case actionTypes.REQUEST_LOGOS:
            return Object.assign({}, state, {
                isFetching: true
            });
        
        case actionTypes.RECEIVE_LOGOS:
            return Object.assign({}, state, {
                isFetching: false,
                concepts: action.concepts
            });

        default:
            return defaultState;
    }
}

export default logoReducer;