import * as actionTypes from './actionTypes';
// Inspiration imports
/**
 * One word no tagline
 */
import aerial from '../assets/images/logo-inspirations/Aerial@2x.png';
import aerialWithTagline from '../assets/images/logo-inspirations/Aerial_Consulting@2x.png';

import centurion from '../assets/images/logo-inspirations/Centurion@2x.png';
import centurionWithTagline from '../assets/images/logo-inspirations/Centurion_Financial_Group@2x.png';

import happyFaces from '../assets/images/logo-inspirations/Happy_Faces@2x.png';
import happyFacesWithTagline from '../assets/images/logo-inspirations/Happy_Faces_Child@2x.png';

import socialWine from '../assets/images/logo-inspirations/Social_Wine@2x.png';
import socialWineWithTagline from '../assets/images/logo-inspirations/Social_Wine_Lounge@2x.png';

import darkRoast from '../assets/images/logo-inspirations/Dark_Roast@2x.png';
import darkRoastWithTagline from '../assets/images/logo-inspirations/Dark_Roast_Cafe@2x.png';

import matchBook from '../assets/images/logo-inspirations/Match_Book@2x.png';
import matchBookWithTagline from '../assets/images/logo-inspirations/Match_Book_Studios@2x.png';


import vantagePoint from '../assets/images/logo-inspirations/Vantage_Point@2x.png';
import vantagePointWithTagline from '../assets/images/logo-inspirations/Vantage_Point_Photography@2x.png';

import summerBelleWithTagline from '../assets/images/logo-inspirations/Summer_Belle_Clothing@2x.png';

import honeyBee from '../assets/images/logo-inspirations/Honey_Bee@2x.png';
import honeyBeeWithTagline from '../assets/images/logo-inspirations/Honey_Bee_Sweeten@2x.png';

import smokeHouse from '../assets/images/logo-inspirations/Smokehouse_BBQ@2x.png';
import smokeHouseWithTagline from '../assets/images/logo-inspirations/Smokehouse_BBQ_Restaurant@2x.png';

import charlesPorter from '../assets/images/logo-inspirations/Charles_Porter@2x.png';
import charlesPorterWithTagline from '../assets/images/logo-inspirations/Charles_Porter_Real_Estate@2x.png';

import claireBiddens from '../assets/images/logo-inspirations/Claire_Biddens@2x.png';
import claireBiddensWithTagline from '../assets/images/logo-inspirations/Claire_Biddens_Event@2x.png';

const defaultState = {
  companyName: '',
  tagline: '',
  industry: '',
  companyDescription: '',
  isFetching: false,
  icons: [],
  inspirations: {
    oneWordNoTagline: [
      {
        id: 0,
        img: claireBiddens,
        isSelected: false
      },
      {
        id: 0,
        img: happyFaces,
        isSelected: false
      },
      {
        id: 0,
        img: aerial,
        isSelected: false
      },
      {
        id: 0,
        img: socialWine,
        isSelected: false
      },
      {
        id: 0,
        img: darkRoast,
        isSelected: false
      },
      {
        id: 0,
        img: matchBook,
        isSelected: false
      },
      {
        id: 0,
        img: centurion,
        isSelected: false
      },
      {
        id: 0,
        img: vantagePoint,
        isSelected: false
      },
      {
        id: 0,
        img: honeyBee,
        isSelected: false
      },
      {
        id: 0,
        img: charlesPorter,
        isSelected: false
      },
      {
        id: 0,
        img: smokeHouse,
        isSelected: false
      },
    ],
    oneWordWithTagline: [
      {
        id: 0,
        img: aerialWithTagline,
        isSelected: false
      },
      {
        id: 0,
        img: socialWineWithTagline,
        isSelected: false
      },
      {
        id: 0,
        img: darkRoastWithTagline,
        isSelected: false
      },
      {
        id: 0,
        img: summerBelleWithTagline,
        isSelected: false
      },
      {
        id: 0,
        img: centurionWithTagline,
        isSelected: false
      },
      {
        id: 0,
        img: matchBookWithTagline,
        isSelected: false
      },
      {
        id: 0,
        img: honeyBeeWithTagline,
        isSelected: false
      },
      {
        id: 0,
        img: smokeHouseWithTagline,
        isSelected: false
      },
      {
        id: 0,
        img: vantagePointWithTagline,
        isSelected: false
      },
      {
        id: 0,
        img: charlesPorterWithTagline,
        isSelected: false
      },
      {
        id: 0,
        img: claireBiddensWithTagline,
        isSelected: false
      },
      {
        id: 0,
        img: happyFacesWithTagline,
        isSelected: false
      }
    ],
    twoWordsNoTagline: [
      {
        id: 0,
        img: aerial,
        isSelected: false
      },
      {
        id: 0,
        img: claireBiddens,
        isSelected: false
      },
      {
        id: 0,
        img: happyFaces,
        isSelected: false
      },
      {
        id: 0,
        img: socialWineWithTagline,
        isSelected: false
      },
      {
        id: 0,
        img: darkRoastWithTagline,
        isSelected: false
      },
      {
        id: 0,
        img: matchBookWithTagline,
        isSelected: false
      },
      {
        id: 0,
        img: centurionWithTagline,
        isSelected: false
      },
      {
        id: 0,
        img: vantagePointWithTagline,
        isSelected: false
      },
      {
        id: 0,
        img: summerBelleWithTagline,
        isSelected: false
      },
      {
        id: 0,
        img: honeyBee,
        isSelected: false
      },
      {
        id: 0,
        img: charlesPorter,
        isSelected: false
      },
      {
        id: 0,
        img: smokeHouse,
        isSelected: false
      },
    ]
  },
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

    case actionTypes.REQUEST_MORE_LOGOS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case actionTypes.RECEIVED_MORE_LOGOS:
      return Object.assign({}, state, {
        isFetching: false,
        concepts: state.concepts.concat(action.concepts)
      });

    default:
      return defaultState;
  }
}

export default logoReducer;