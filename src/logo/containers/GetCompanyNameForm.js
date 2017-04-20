import react from 'react';
import { connect } from 'react-redux';
import CompanyNameForm from '../components/CompanyNameForm';

import { setCompanyName } from '../actions';

export const GetCompanyNameForm = ({ companyName, onClick }) => {
    return (
        <CompanyNameForm onClick={onClick} />
    )
};


const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => dispatch(setCompanyName())
    };
};

const GetCompanyNameForm  = connect(
    mapDispatchToProps,
)(CompanyNameForm);

