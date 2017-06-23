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
                <div className="logomator-form">
                    <span className="orange-bar"></span>

                    <form name="tagline-form">
                        <label htmlFor="tagline">Do you have a tagline or slogan you want in your logo?</label>

                        <label
                            className={!this.state.hasTagline ? 'logomator-radio-btn selected' : 'logomator-radio-btn'}
                            style={{marginRight: '20px'}}>

                            <input type="radio" value="false"
                                   checked={!this.state.hasTagline}
                                   onChange={this.handleOptionChange} />

                            <div className="radio-btn-labels">
                                <span>No</span>
                                <p>I don't currently have one</p>
                            </div>

                        </label>

                        <label
                            className={this.state.hasTagline ? 'logomator-radio-btn selected' : 'logomator-radio-btn'}>

                            <input type="radio" value="true"
                                   checked={this.state.hasTagline}
                                   onChange={this.handleOptionChange} />

                            <div className="radio-btn-labels">
                                <span>Yes</span>
                                <p>I have a tagline or slogan</p>
                            </div>

                        </label>

                        <div className={ this.state.hasTagline ? 'show' : 'no-show' } style={{marginTop: '30px'}}>

                            <label htmlFor="tagline">What is your tagline or slogan?</label>
                            <input onChange={ this.handleInputChange } name="tagline" ref={text => {
                                if (text !== null) {
                                    // Focus input after render.
                                    text.focus();
                                }
                                this.state.tagline = text
                            }}/>

                            <button onClick={ e =>{
                               e.preventDefault();
                               this.props.onClick(this.state.tagline.value);
                               this.props.history.push('/industry');
                                }
                              }
                                    className={ this.state.tagline.length > 0 ? 'logomator-btn' : 'logomator-btn btn-disabled' }
                                    style={{marginTop: '30px'}}>
                                Continue
                            </button>

                        </div>

                        <button
                            className={!this.state.hasTagline ? 'logomator-btn' : 'no-show'}
                            style={{marginTop: '30px'}} onClick={e =>{
                               e.preventDefault();
                               this.props.history.push('/industry');
                                }//
                              }
                            >Continue
                        </button>

                        <button className="back-btn" style={{marginTop: '30px'}} onClick={ e =>{
                               e.preventDefault();
                                this.props.history.push('/');
                                }
                              }>
                            Back
                        </button>

                    </form>
                </div>
        )
    }
}
export default TaglineComponent;