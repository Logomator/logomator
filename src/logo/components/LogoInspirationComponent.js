import React from 'react';
import adaChatBubblePic from '../../assets/images/ada-profile-bubble.png';
import logoInspiration from '../../assets/images/logo-inspirations/GunarBolf.png';

class LogoInspirationComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="logomator-container">
                    <span className="orange-bar"></span>
                    <h2 style={{
                    fontSize: '20px',
                    color: '#19191A',
                    marginTop: '20px'
                    }}>Choose 5 or more logo examples you like.</h2>

                    <div className="logo-inspiration-container">
                        <div className="logo-inspirations">
                            <div className={this.props.inspiration.isSelected ? 'logo col-md-3 selected' : 'logo col-md-3'} onClick={e => {
                            }}>
                                <img src={this.props.inspiration.img} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LogoInspirationComponent;