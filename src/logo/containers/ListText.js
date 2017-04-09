import React from 'react';
import SampleComponent from '../components/SampleComponent';
import { connect } from 'react-redux';

const getText = (text) => {
    return text;
};


const mapStateToProps = (state) => ({
   text: getText(state.text)
});

const ListText = connect(
    mapStateToProps,
)(SampleComponent);

export default ListText;