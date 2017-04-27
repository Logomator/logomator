import React from 'react';
import CompanyNameComponent from '../components/CompanyNameComponent';
import Navbar from '../../components/common/Navbar';
import ChatComponent from '../../components/common/ChatComponent';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { setCompanyName } from '../actions';

const SetCompanyName = withRouter(({ onClick, history }) => {
    return (
    <div>
        <Navbar />
        <div className="container">
            <div className="logomator-base">
                <ChatComponent
                    text={<h1><strong>Hi, I’m Ada.</strong> Your personal logo design assistant</h1>}
                    text2={"Let’s start designing you the perfect logo - it only takes a few minutes."}
                />
                <CompanyNameComponent onClick={onClick} history={history}/>
            </div>
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