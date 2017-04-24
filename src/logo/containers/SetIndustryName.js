import React from 'react';
import IndustryNameComponent from '../components/IndustryNameComponent';
import Navbar from '../../components/Navbar';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { setIndustryName } from '../actions';

const IndustryName = withRouter(({ companyName, onClick, history }) => {
    return (
        <div>
            <Navbar />
            <div className="logomator-base">
                <IndustryNameComponent companyName={companyName} onClick={onClick} history={history}/>
            </div>
        </div>
    )
});


const mapStateToProps = (state) => ({
    companyName: state.companyName
});

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (industry) => {
            dispatch(setIndustryName(industry))
        }
    }
};

const SetIndustryName = connect(
    mapStateToProps,
    mapDispatchToProps
)(IndustryName);

export default SetIndustryName;