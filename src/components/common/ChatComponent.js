import React from 'react';
import adaChatBubblePic from '../../assets/images/ada-profile-bubble.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const ChatComponent = ({ text, text2, height }) => {
    height = height || '80px';

    return (
            <div className="chat-container">
                <div className="chat-bubble-pic">
                    <img src={adaChatBubblePic} alt=""/>
                </div>

                <ReactCSSTransitionGroup
                    transitionName="bubble"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>

                <div className="chat-bubble-message" style={{
                    height: {height},
                    maxWidth: '600px',
                    padding: '20px'
                  }}>

                    <ReactCSSTransitionGroup
                        transitionName="header"
                        transitionAppear={true}
                        transitionAppearTimeout={0}
                        transitionEnter={true}
                        transitionEnterTimeout={0}
                        transitionLeave={false}>
                        <div>
                            {text}
                            {text2}
                        </div>
                    </ReactCSSTransitionGroup>
                </div>
                    </ReactCSSTransitionGroup>
            </div>
    )
};

export default ChatComponent;