import React from 'react';
import { connect } from 'react-redux';
import { setCompanyName } from '../actions';
import { fetchIcons } from '../actions';
import { receiveIcons } from '../actions';


let SetLogoText = ({ dispatch, companyName }) => {
    companyName = companyName || '';
    console.log("COMPANY_NAME", companyName);

    function handleChange(event) {
        console.log(event.target.value);
        dispatch(setCompanyName(event.target.value));
    }

    return (
        <div className="container">
            <h1><strong>Hi, I’m Ada.</strong> Your personal logo design assistant.</h1>
            <h2>Let’s start designing you the perfect logo - it only takes a few minutes.</h2>

            <div className="logomator-form">

                <span className="orange-bar"></span>

                <form name="company_name" onSubmit={e => {
                e.preventDefault();

                // Dispatch set logo text action
                dispatch(setCompanyName(companyName.value));

                companyName.value = '';

                }}>

                    <label htmlFor="company_name">First, what is the name of your business or organization?</label>
                    <input onChange={handleChange} ref={text => {
                        companyName = text
                    }} />

                    <span className="bottom-label">I’ll use this as your main logo text.</span>

                    <button type="submit" className={companyName.length > 0 ? 'logomator-btn btn' : 'logomator-btn btn-disabled'}>{companyName}</button>

                </form>
            </div>
        </div>
    )
};


export default SetLogoText;