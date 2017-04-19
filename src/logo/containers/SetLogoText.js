import React from 'react';
import { connect } from 'react-redux';
import { setLogoText } from '../actions';
import { fetchIcons } from '../actions';
import { receiveIcons } from '../actions';


let SetLogoText = ({ dispatch }) => {
    let companyNameInput;
    let tagLineInput;

    return (

        <div className="container">
            <h1><strong>Hi, I’m Ada.</strong> Your personal logo design assistant.</h1>
            <h2>Let’s start designing you the perfect logo - it only takes a few minutes.</h2>

            <div className="logomator-form">

                <span className="orange-bar"></span>

                <form name="company_name" onSubmit={e => {
                e.preventDefault();

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

                    <label htmlFor="company_name">First, what is the name of your business or organization?</label>
                    <input ref={text => {
                        companyNameInput = text
                    }} />

                    <span className="bottom-label">I’ll use this as your main logo text.</span>

                    <button type="submit" className="logomator-btn btn-disabled">Continue</button>

                </form>
            </div>
        </div>
    )
};

SetLogoText = connect()(SetLogoText);
export default SetLogoText;