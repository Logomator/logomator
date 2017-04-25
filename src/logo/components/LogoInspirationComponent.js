import React from 'react';
import adaChatBubblePic from '../../assets/images/ada-profile-bubble.png';
import logoInspiration from '../../assets/images/logo-inspirations/GunarBolf.png';

class LogoInspirationComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {logoInspirations: []}
    }

    render() {
        return (
            <div className="container">
                <div className="chat-container">
                    <div className="chat-bubble-pic">
                        <img src={adaChatBubblePic} alt=""/>
                    </div>
                    <div className="chat-bubble-message" style={{
                    height: '80px',
                    maxWidth: '600px',
                    padding: '20px'
                    }}>
                        <h1>Thanks, that helps! Now, let’s figure out how your logo should look.
                            I’ll use the examples below to understand what styles I should incorporate in your logo.</h1>
                    </div>
                </div>

                <div className="logomator-container">
                    <span className="orange-bar"></span>
                    <h2 style={{
                    fontSize: '20px',
                    color: '#19191A',
                    marginTop: '20px'
                    }}>Choose 5 or more logo examples you like.</h2>

                    <div className="logo-inspiration-container">
                        <div className="logo-inspirations">
                           <div className="logo col-md-3">
                               <img src={logoInspiration} alt=""/>
                           </div>

                            <div className="logo col-md-3">
                                <img src={logoInspiration} alt=""/>
                            </div>

                            <div className="logo col-md-3">
                                <img src={logoInspiration} alt=""/>
                            </div>

                            <div className="logo col-md-3">
                                <img src={logoInspiration} alt=""/>
                            </div>

                            <div className="logo col-md-3">
                                <img src={logoInspiration} alt=""/>
                            </div>

                            <div className="logo col-md-3">
                                <img src={logoInspiration} alt=""/>
                            </div>

                            <div className="logo col-md-3">
                                <img src={logoInspiration} alt=""/>
                            </div>

                            <div className="logo col-md-3">
                                <img src={logoInspiration} alt=""/>
                            </div>

                            <div className="logo col-md-3">
                                <img src={logoInspiration} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default LogoInspirationComponent;