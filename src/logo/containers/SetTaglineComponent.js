import React from 'react';
import TaglineComponent from '../components/TaglineComponent';
import Navbar from '../../components/common/Navbar';
import ChatComponent from '../../components/common/ChatComponent';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { setTaglineText } from "../actions";

const SetTaglineComponent = withRouter(({ companyName, onClick, history }) => {
    return (
        <div>
            <Navbar />
            <div className="logomator-base">
              <div className="tagline-component container">
                  <ChatComponent
                      text={<h1><span>{companyName} is a great name!</span> It’s going to look perfect in your logo.</h1>}
                  />

                  <TaglineComponent companyName={companyName} onClick={onClick} history={history} />
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