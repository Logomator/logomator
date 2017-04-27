import React from 'react';
import LogoInspirationComponent from '../components/LogoInspirationComponent';
import Navbar from '../../components/common/Navbar';
import ChatComponent from '../../components/common/ChatComponent';
import ProgressBarComponent from '../../components/common/ProgressBarComponent';
import HeaderComponent from '../../components/common/HeaderComponent';
import { selectLogoInspiration } from '../actions';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const LogoInspiration = withRouter(({ history, inspirations, onClick}) => {

    let logoInspirations = [];

    inspirations.forEach((inspiration) => {
        logoInspirations.push(
            <div>
                <LogoInspirationComponent history={history} inspiration={inspiration} onClick={onClick} />
            </div>
        );
    });

    let text = 'Thanks, that helps! Now, let’s figure out how your logo should look.' +
        ' I’ll use the examples below to understand what styles I should incorporate in your logo.';
    let headerText = 'Choose 5 or more logo examples you like.';

    return (
        <div>
            <Navbar />
            <div className="container" style={{
            paddingRight: '0',
            paddingLeft: '0',
            paddingBottom: '70px'}}>

                <ChatComponent text={text} height="80px" />

                <div className="logomator-base inspiration">
                    <div className="logomator-container">

                        <HeaderComponent headerText={headerText} />

                        <div className="logo-inspiration-container">
                            {logoInspirations}
                        </div>
                    </div>
                </div>
            </div>

            <ProgressBarComponent history={history} inspirations={inspirations} />
        </div>
    )
});

const mapStateToProps = (state) => ({
    inspirations: state.inspirations
});

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (inspiration) => {
            dispatch(selectLogoInspiration(inspiration))
        }
    }
};

const LogoInspirationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoInspiration);

export default LogoInspirationContainer;