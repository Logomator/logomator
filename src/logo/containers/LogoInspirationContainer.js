import React from 'react';
import LogoInspirationComponent from '../components/LogoInspirationComponent';
import Navbar from '../../components/Navbar';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const LogoinspirationContainer = withRouter(({ }) => {
    return (
        <div>
            <Navbar />
            <div className="logomator-base">
                <LogoInspirationComponent />
            </div>
        </div>
    )
});

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onClick: (companyName) => {
//             dispatch(setCompanyName(companyName))
//         }
//     }
// };

// const HomeComponent = connect(
//     null,
//     mapDispatchToProps
// )(SetCompanyName);

export default LogoinspirationContainer;