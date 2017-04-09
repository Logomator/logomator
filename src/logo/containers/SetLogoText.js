import React from 'react';
import { connect } from 'react-redux';
import { setLogoText } from '../actions';

let SetLogoText = ({ dispatch }) => {
    let companyNameInput;
    let tagLineInput;

    return (
        <div>
            <form onSubmit={e => {
            e.preventDefault();

            if (!companyNameInput.value.trim()) {
                return
            }

            dispatch(setLogoText([companyNameInput.value, tagLineInput.value]));

            companyNameInput.value = '';
            tagLineInput.value = '';

            }}>
                <input placeholder="Logo Text Line 1" ref={node => {
                    companyNameInput = node
                }} />

                <input placeholder="Logo Text Line 2" ref={node => {
                    tagLineInput = node
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