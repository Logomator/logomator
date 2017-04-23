import React from 'react';
import TaglineComponent from './TaglineComponent';
import Navbar from '../../components/Navbar';

import { connect } from 'react-redux';
import { setTaglineText } from "../actions";

const SetTaglineComponent = ({ companyName, onClick }) => {
    return (
        <div>
            <Navbar />
            <TaglineComponent companyName={companyName} onClick={onClick} />
        </div>
    )
};

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