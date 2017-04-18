import React from 'react';
import Navbar from './Navbar';
import SetLogoText from '../../core/logo/containers/SetLogoText';
import GenerateLogos from '../../core/logo/containers/GenerateLogos';
import SetColorPalettes from '../../core/color-palette/containers/SetColorPalettes';

class Layout extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <div className="logomator-base">
                    <SetColorPalettes />
                </div>
            </div>
        )
    }
}

export default Layout;