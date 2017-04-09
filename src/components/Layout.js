import React from 'react';
import Navbar from './Navbar';
import LogoList from '../logo/components/LogoList';
import SetLogoText from '../logo/containers/SetLogoText';
import GenerateLogos from '../logo/containers/GenerateLogos';
import ListText from '../logo/containers/ListText';

class Layout extends React.Component {

    render() {
        return (
            <div>
                <Navbar />

                <div className="logomator-base">
                    <h1>First, select 5 or more logos that you like.</h1>
                    <h2>We’ll use these to understand the logo style you like in order to design you the perfect logo.</h2>

                    <SetLogoText />

                    <GenerateLogos />

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