import React from 'react';
import Navbar from '../../components/common/Navbar';
import ChatComponent from '../../components/common/ChatComponent';
import SurveyComponent from '../../logo/components/SurveyComponent';
import { withRouter } from 'react-router-dom'

const SurveyContainer = withRouter(({ history }) => {
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
                    <h1><strong>Help us provide a better experience!</strong> Please give us your feedback and we’ll send you your logo.</h1>}
                />

                <SurveyComponent history={history} />
            </div>
        </div>
    )
});

export default SurveyContainer;