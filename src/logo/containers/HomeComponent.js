import React from 'react';
import CompanyNameComponent from '../components/CompanyNameComponent';
import Navbar from '../../components/Navbar';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { setCompanyName } from '../actions';

const SetCompanyName = withRouter(({ onClick, history }) => {
    return (
    <div>
        <Navbar />
        <div className="logomator-base">
            <CompanyNameComponent onClick={onClick} history={history}/>
        </div>
    </div>
    )
});

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
)(SetCompanyName);

export default HomeComponent;