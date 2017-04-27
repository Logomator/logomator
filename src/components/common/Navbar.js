import React from 'react';
import logo from '../../../../assets/images/logomator-logo.png';

class Navbar extends React.Component {

    render() {
        return (
            <nav className="logomator-navbar">
                <a href="/">
                    <img src={logo} className="logo" alt="Logomator"/>
                </a>
                <div className="right">
                    <button className="start-over">Start Over</button>
                </div>
            </nav>
        );
    }
}

export default Navbar;