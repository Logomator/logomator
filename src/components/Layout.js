import React from 'react';
import Navbar from './Navbar';
import LogoTable from '../logo/components/LogoTable';

class Layout extends React.Component {

    render() {
        return (
            <div>
                <Navbar />

                <div className="logomator-base">
                    <h1>First, select 5 or more logos that you like.</h1>
                    <h2>We’ll use these to understand the logo style you like in order to design you the perfect logo.</h2>

                    <div className="selection container-fluid">
                        <div className="row">
                            <LogoTable />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;