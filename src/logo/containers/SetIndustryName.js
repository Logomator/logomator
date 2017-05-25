import React from 'react';
import IndustryNameComponent from '../components/IndustryNameComponent';
import Navbar from '../../components/common/Navbar';
import ChatComponent from '../../components/common/ChatComponent';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { setIndustryName, setCompanyDescription } from '../actions';

const IndustryName = withRouter(({ companyName, onSelect, onClick, history }) => {
    return (
        <div>
            <Navbar />
            <div className="logomator-base">
                <div className="industry-name-component container">
                    <ChatComponent
                        text={<h1>Now, tell me a little bit more about <span>{companyName}</span>.</h1>}
                        height="60px"
                    />
                    <IndustryNameComponent companyName={companyName} onSelect={onSelect} onClick={onClick} history={history}/>
                </div>
            </div>
        </div>
    )
});


const mapStateToProps = (state) => ({
    companyName: state.companyName
});

const mapDispatchToProps = (dispatch) => {
    return {
        onSelect: (industry) => {
            dispatch(setIndustryName(industry))
        },
        onClick: (description) => {
            dispatch(setCompanyDescription(description));
        }
    }
};

const SetIndustryName = connect(
    mapStateToProps,
    mapDispatchToProps
)(IndustryName);

export default SetIndustryName;