import React from 'react';
import IndustryNameComponent from '../components/IndustryNameComponent';
import Navbar from '../../components/Navbar';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { setIndustryName, setCompanyDescription } from '../actions';

const IndustryName = withRouter(({ companyName, onSelect, onClick, history }) => {
    return (
        <div>
            <Navbar />
            <div className="logomator-base">
                <IndustryNameComponent companyName={companyName} onSelect={onSelect} onClick={onClick} history={history}/>
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