import fetch from 'isomorphic-fetch';
import { SET_COMPANY_NAME } from './actionTypes';
import { SET_TAGLINE_TEXT } from './actionTypes';
import { SET_INDUSTRY_NAME } from './actionTypes';
import { SET_COMPANY_DESCRIPTION } from './actionTypes';
import { SELECT_LOGO_INSPIRATION } from './actionTypes';
import { SELECT_COLOR_PALETTE } from './actionTypes';
import { REQUEST_ICONS } from './actionTypes';
import { RECEIVE_ICONS } from './actionTypes';
import { REQUEST_LOGOS } from './actionTypes';

export const setCompanyName = (name) => {
    return { type: SET_COMPANY_NAME, name }
};

export const setTaglineText = (tagline) => {
    return { type: SET_TAGLINE_TEXT, tagline }
};

export const setIndustryName = (industry) => {
    return { type: SET_INDUSTRY_NAME, industry }
};

export const setCompanyDescription = (description) => {
    return { type: SET_COMPANY_DESCRIPTION, description }
};

export const selectLogoInspiration = (inspiration) => {
    return { type: SELECT_LOGO_INSPIRATION, inspiration }
};

export const selectColorPalette = (name) => {
    return { type: SELECT_COLOR_PALETTE, name }
};

export const requestIconsByTerm = (term) => {
    return { type: REQUEST_ICONS, term }
};

export const receiveIcons = (icons)  => {
    return { type: RECEIVE_ICONS, icons }
};

export const requestLogos = (chars) => {
    return { type: REQUEST_LOGOS, chars }
};

export function fetchIcons (term) {
    return dispatch => {

        dispatch(requestIconsByTerm(term));

        return fetch(`http://localhost:8000/api/icons/${term}`)
          .then(response => response.json())
    }
}

export function fetchLogos (chars) {
    return dispatch => {
        dispatch(requestLogos(chars));

        const fetchLogoRequest = new Request('http://localhost:8000/api/logos/chars', {method: 'POST', body: `{'chars' : ${chars}`});

        console.log("LOGO_REQUEST: ", fetchLogoRequest);

        return fetch(request)
          .then(response => response.json());

    }
}