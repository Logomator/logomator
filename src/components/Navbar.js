import React, { Component } from 'react';
import logo from '../assets/images/logomator-logo.png';

class Navbar extends Component {

    render() {
        return (
            <nav className="logomator-navbar">
                <div className="container">
                    <img src={logo} className="logo" alt="Logomator"/>
                    <div className="right">
                        <button className="login">Log in</button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
