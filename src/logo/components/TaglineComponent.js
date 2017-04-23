import React from 'react';
import adaChatBubblePic from '../../assets/images/ada-profile-bubble.png';

class TaglineComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            companyName: this.props.companyName,
            hasTagline: false,
            tagline: ''
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleOptionChange(event) {
        if (event.target.value === 'true') {
            this.setState({
                hasTagline: true
            });
        } else {
            this.setState({
                hasTagline: false
            });
        }
    }

    handleInputChange(event) {
        this.setState({ tagline: event.target.value });
    }

    render() {
        return (
            <div className="tagline-component container">
                <div className="chat-container">

                    <div className="chat-bubble-pic">
                        <img src={adaChatBubblePic} alt=""/>
                    </div>

                    <div className="chat-bubble-message" style={{ height: '60px'}}>
                        <h1>Great name! <strong>{this.state.companyName}</strong> is going to look so good in your logo. </h1>
                    </div>
                </div>

                <div className="logomator-form">
                    <span className="orange-bar"></span>

                    <form name="tagline">
                        <label htmlFor="tagline">Do you have a tagline or slogan you want in your logo?</label>

                        <div
                            className={!this.state.hasTagline ? 'logomator-radio-btn selected' : 'logomator-radio-btn'}
                            style={{marginRight: '20px'}}>

                            <input type="radio" value="false"
                                   checked={!this.state.hasTagline}
                                   onChange={this.handleOptionChange} />

                            <div className="radio-btn-labels">
                                <strong>No</strong>
                                <p>I don't currently have one.</p>
                            </div>

                        </div>

                        <div
                            className={this.state.hasTagline ? 'logomator-radio-btn selected' : 'logomator-radio-btn'}>

                            <input type="radio" value="true"
                                   checked={this.state.hasTagline}
                                   onChange={this.handleOptionChange} />

                            <div className="radio-btn-labels">
                                <strong>Yes</strong>
                                <p>I have a tagline or slogan.</p>
                            </div>

                        </div>

                        <div className={ this.state.hasTagline ? 'show' : 'no-show' } style={{marginTop: '40px'}}>

                            <label htmlFor="tagline">What is your tagline or slogan?</label>
                            <input onChange={ this.handleInputChange } ref={text => {
                            this.state.tagline = text
                            }}/>

                            <button onClick={ e =>{
                               e.preventDefault();
                               this.props.onClick(this.state.tagline.value);
                                }
                              }
                                    className={ this.state.tagline.length > 0 ? 'logomator-btn' : 'logomator-btn btn-disabled' }
                                    style={{marginTop: '40px'}}>
                                Continue
                            </button>

                        </div>

                        <button
                            className={!this.state.hasTagline ? 'logomator-btn' : 'no-show'}
                            style={{marginTop: '40px'}}
                            >Continue
                        </button>

                        <button className="back-btn" style={{marginTop: '40px'}}>
                            Back
                        </button>

                    </form>
                </div>
            </div>
        )
    }
}
export default TaglineComponent;