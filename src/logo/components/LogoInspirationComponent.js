import React from 'react';
import adaChatBubblePic from '../../assets/images/ada-profile-bubble.png';

class LogoInspirationComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {logos: []}
    }

    render() {
        return (
            <div className="container">
                <div className="chat-container">
                    <div className="chat-bubble-pic">
                        <img src={adaChatBubblePic} alt=""/>
                    </div>
                    <div className="chat-bubble-message">
                        <h1><strong>Hi, I’m Ada.</strong> Your personal logo design assistant.</h1>
                        <h2>Let’s start designing you the perfect logo - it only takes a few minutes.</h2>
                    </div>
                </div>
            </div>
        )
    }


}

export default LogoInspirationComponent;