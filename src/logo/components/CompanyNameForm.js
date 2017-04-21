import React from 'react';
import adaChatBubblePic from '../../assets/images/ada-profile-bubble.png';

class CompanyNameFormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { companyName: '' };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ companyName: event.target.value });
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

                <div className="logomator-form">

                    <span className="orange-bar"></span>

                    <form name="company_name">

                        <label htmlFor="company_name">First, what is the name of your business or organization?</label>
                        <input onChange={ this.handleInputChange } ref={text => {
                        this.state.companyName = text
                    }}/>

                        <span className="bottom-label">This will be used as your main logo text.</span>

                        <button onClick={ e =>{
                           e.preventDefault();
                            this.props.onClick(this.state.companyName.value)}
                          }
                                className={ this.state.companyName.length > 0 ? 'logomator-btn' : 'logomator-btn btn-disabled' }>
                            Continue
                        </button>

                    </form>
                </div>
            </div>
        )
    }
}

export default CompanyNameFormComponent;