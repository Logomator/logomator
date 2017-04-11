import fetch from 'isomorphic-fetch';
import { SET_LOGO_TEXT } from './actionTypes';
import { REQUEST_ICONS } from './actionTypes';
import { RECEIVE_ICONS } from './actionTypes';

export const setLogoText = (logoText) => {
    return { type: SET_LOGO_TEXT, logoText }
};

export const requestIconsByTerm = (term) => {
    return { type: REQUEST_ICONS, term }
};

export const receiveIcons = (icons)  => {
    return { type: RECEIVE_ICONS, icons }
};

export function fetchIcons (term) {
    return dispatch => {

        dispatch(requestIconsByTerm(term));

        return fetch(`http://localhost:8000/api/icons/${term}`)
            .then(response => response.json())
    }
}