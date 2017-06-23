import React from 'react';
import Navbar from '../../components/common/Navbar';
import ChatComponent from '../../components/common/ChatComponent';
import SurveyComponent from '../../logo/components/SurveyComponent';
import { postSurveyRequest } from '../../logo/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Survey = withRouter(({ history, experience, improvements, mostLiked, onSubmit }) => {
    return (
        <div>
            <Navbar />
            <div className="survey container"
                 style={{
                    maxWidth: '630px',
                    paddingTop: '100px',
                    paddingBottom: '70px'
                 }}>
              <ChatComponent
                    text={
                    <h1><strong>Help us provide a better experience!</strong> Please give us your feedback to download your logo files.</h1>}
                />

                <SurveyComponent experience={experience} improvements={improvements}
                                 mostLiked={mostLiked} onSubmit={onSubmit} history={history} />
            </div>
        </div>
    )
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (formData) => {
    dispatch(postSurveyRequest(formData));
  }
});

const mapStateToProps = (state) => ({
  email: state.email,
  experience: state.experience,
  mostLiked: state.mostLiked,
  improvements: state.improvements
});

const SurveyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Survey);



export default SurveyContainer;