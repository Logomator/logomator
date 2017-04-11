import React from 'react';
import { connect } from 'react-redux';
import { setLogoText } from '../actions';
import { fetchIcons } from '../actions';
import { receiveIcons } from '../actions';


let SetLogoText = ({ dispatch }) => {
    let companyNameInput;
    let tagLineInput;

    return (
        <div>
            <form onSubmit={e => {
            e.preventDefault();

            if (!companyNameInput.value.trim()) {
                return;
            }

            // Dispatch set logo text action
            dispatch(setLogoText([companyNameInput.value, tagLineInput.value]));

            // Dispatch fetch icons action.
            dispatch(fetchIcons(companyNameInput.value))
            .then((icons) => {

                // Dispatch receive icons action
                dispatch(receiveIcons(icons));
            }); // TODO add catch error

            companyNameInput.value = '';
            tagLineInput.value = '';

            }}>
                <input placeholder="Logo Text Line 1" ref={text => {
                    companyNameInput = text
                }} />

                <input placeholder="Logo Text Line 2" ref={text => {
                    tagLineInput = text
                }} />


                <button type="submit">
                    Generate Logos
                </button>

            </form>
        </div>
    )
};

SetLogoText = connect()(SetLogoText);
export default SetLogoText;