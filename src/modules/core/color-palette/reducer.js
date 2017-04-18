import * as actionTypes from './actionTypes';

const defaultState = {
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
    ]
};

const palette = (state, action) => {
    switch (action.type) {
        case actionTypes.SELECT_COLOR_PALETTE:
            console.log(state.name);
            if (state.name !== action.name) {
                return state;
            }

            return Object.assign({}, state, {
                isSelected: !state.isSelected
            });

        default:
            return defaultState;

    }
};

export function colorPaletteReducer (state, action) {
    console.log("CLICKED", action.name);
    switch (action.type) {

        case actionTypes.SELECT_COLOR_PALETTE:
            return {
                ...state,
                palettes: state.palettes.map(p =>
                    palette(p, action)
                )
            };

        default:
            return defaultState;
    }
}

export default colorPaletteReducer;