import React from 'react';
import CompanyNameForm from './CompanyNameForm';

import { connect } from 'react-redux';
import { setCompanyName } from '../actions';

const ShowCompanyNameForm = ({ onClick }) => {
    return (
        <CompanyNameForm onClick={onClick} />
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (companyName) => {
            dispatch(setCompanyName(companyName))
        }
    }
};
const HomeComponent = connect(
    null,
    mapDispatchToProps
)(ShowCompanyNameForm);

export default HomeComponent;//