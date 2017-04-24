import React from 'react';
import adaChatBubblePic from '../../assets/images/ada-profile-bubble.png';

class IndustryNameComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="industry-name-component container">
                <div className="chat-container">
                    <div className="chat-bubble-pic">
                        <img src={adaChatBubblePic} alt=""/>
                    </div>
                    <div className="chat-bubble-message" style={{height: '60px'}}>
                        <h1>What industry do you think <strong>{this.props.companyName}</strong> is most related to?
                        </h1>
                    </div>
                </div>

                <div className="logomator-form">

                    <span className="orange-bar"></span>

                    <form name="industry_name">

                        <label htmlFor="industry">What industry do you think <strong>Doggy Daycare</strong> is most related to?</label>

                        <div className="select-triangle"></div>
                        <select value="industry" style={{display: 'block'}}>
                            <option selected value="All Categories">Select Industry</option>
                        </select>

                        <button onClick={ e =>{
                              e.preventDefault();
                               this.props.history.push('/tagline');
                              }

                             } className="logomator-btn"
                               style={{marginTop: '40px'}}>
                            Continue
                        </button>

                        <button className="back-btn" style={{marginTop: '40px'}} onClick={ e =>{
                            e.preventDefault();
                            this.props.history.push('/tagline');
                            }
                        }>
                            Back
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default IndustryNameComponent;