import React, { Component } from 'react';
import logo from '../../../assets/images/logomator-logo.png';

class Navbar extends Component {

    render() {
        return (
            <nav className="logomator-navbar">
                <img src={logo} className="logo" alt="Logomator"/>
                <div className="right">
                    <button className="start-over">Start Over</button>
                </div>
            </nav>
        );
    }
}

export default Navbar;
