import React from 'react';
import CompanyNameForm from './CompanyNameForm';

import { connect } from 'react-redux';
import { setCompanyName } from '../actions';

const ShowCompanyNameForm = ({ onClick }) => {
    return (
        <CompanyNameForm onClick={onClick} />
    )
};

const mapDispatchToProps = (dispatch, ownProps) => {
    debugger;
    return {
        onClick: () => {
            dispatch(setCompanyName(ownProps.companyName))
        }
    }
};

const HomeComponent = connect (
    mapDispatchToProps
)(ShowCompanyNameForm);

export default HomeComponent;