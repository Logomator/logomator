import React from 'react';
import Navbar from './Navbar';
import SetLogoText from '../logo/containers/SetLogoText';
import GenerateLogos from '../logo/containers/GenerateLogos';
import HomeComponent from '../logo/components/HomeComponent';
import TaglineComponent from '../logo/components/TaglineComponent';

class Layout extends React.Component {

    render() {
        return (
            <div>
                <Navbar />

                <div className="logomator-base">
                    <TaglineComponent />

                    <div className="selection container-fluid">
                        <div className="row">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;