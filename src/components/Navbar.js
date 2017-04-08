import React, { Component } from 'react';
import logo from '../assets/images/logomator-logo.png';
import '../Apps.css';

class Navbar extends Component {

    render() {
        return (
            <nav className="logomator-navbar">
                <img src={logo} class="logo" alt="Logomator"/>
                <div className="right">
                    <button className="loging">Log in</button>
                </div>
            </nav>
        );
    }
}

export default Navbar;
