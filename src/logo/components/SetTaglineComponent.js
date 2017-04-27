import React from 'react';
import TaglineComponent from './TaglineComponent';
import Navbar from '../../components/common/Navbar';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { setTaglineText } from "../actions";

const SetTaglineComponent = withRouter(({ companyName, onClick, history }) => {
    return (
        <div>
            <Navbar />
            <TaglineComponent companyName={companyName} onClick={onClick} history={history} />
        </div>
    )
});

const mapStateToProps = (state) => ({
    companyName: state.companyName
});

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (tagline) => {
            dispatch(setTaglineText(tagline))
        }
    }
};

const ShowTaglineComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(SetTaglineComponent);

export default ShowTaglineComponent;