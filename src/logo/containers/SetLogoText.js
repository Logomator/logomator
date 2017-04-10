import React from 'react';
import { connect } from 'react-redux';
import { setLogoText } from '../actions';
import { fetchIcons } from '../actions';

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

            dispatch(setLogoText([companyNameInput.value, tagLineInput.value]));
            dispatch(fetchIcons(companyNameInput.value));

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