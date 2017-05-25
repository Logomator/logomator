import React from 'react';
import logo from '../../assets/images/logomator-logo.png';

class Navbar extends React.Component {

    render() {
        return (

            <nav className="logomator-navbar">
                <div className="container">
                  <a href="/">
                      <img src={logo} className="logo" alt="Logomator"/>
                  </a>
                  <div className="right">
                      <a href="/">
                        <button className="start-over">Start Over</button>
                      </a>
                  </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;