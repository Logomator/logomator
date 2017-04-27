import React from 'react';
import adaChatBubblePic from '../../assets/images/ada-profile-bubble.png';

const ChatComponent = ({ text, text2, height }) => {
    text2 = text2 || '';

    return (
            <div className="chat-container">
                <div className="chat-bubble-pic">
                    <img src={adaChatBubblePic} alt=""/>
                </div>

                <div className="chat-bubble-message" style={{
                    height: {height},
                    maxWidth: '600px',
                    padding: '20px'
                  }}>

                <h1>{text}</h1>
                <h2 className={text2 && text2.length > 0 ? 'show' : 'no-show'}>{text2}</h2>
                </div>
            </div>
    )
};

export default ChatComponent;