import fetch from 'isomorphic-fetch';
import request from 'request';
import { SET_COMPANY_NAME } from './actionTypes';
import { SET_TAGLINE_TEXT } from './actionTypes';
import { SET_INDUSTRY_NAME } from './actionTypes';
import { SET_COMPANY_DESCRIPTION } from './actionTypes';
import { SELECT_LOGO_INSPIRATION } from './actionTypes';
import { SELECT_COLOR_PALETTE } from './actionTypes';
import { REQUEST_ICONS } from './actionTypes';
import { RECEIVE_ICONS } from './actionTypes';
import { REQUEST_LOGOS } from './actionTypes';
import { RECEIVE_LOGOS } from './actionTypes';

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

export const receiveLogos = (concepts) => {
    return { type: RECEIVE_LOGOS, concepts }
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

        const generateLogoRequest = {
            url: 'http://localhost:8000/api/logos/chars',
            method: 'POST',
            body: JSON.stringify(chars),
            headers: {'Content-Type': 'application/json'}
        };

        return new Promise((fulfill, reject) => {
            request(generateLogoRequest, (err, body, res) => {
                res = JSON.parse(res);
                if (res.statusCode === 200) {
                    console.log(res.concepts);
                        dispatch(receiveLogos(res.concepts));
                        fulfill(body);

                } else {
                    reject(res);
                }
            });
        });
    }
}