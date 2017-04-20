import React from 'react';

class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {inputText: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({inputText: event.target.value});
    }

    render() {
        return (
            <div className="container">
                <h1><strong>Hi, I’m Ada.</strong> Your personal logo design assistant.</h1>
                <h2>Let’s start designing you the perfect logo - it only takes a few minutes.</h2>

                <div className="logomator-form">

                    <span className="orange-bar"></span>

                    <form name="company_name">

                        <label htmlFor="company_name">First, what is the name of your business or organization?</label>
                        <input onChange={this.handleChange} ref={text => {
                        this.state.inputText = text
                    }}/>

                        <span className="bottom-label">I’ll use this as your main logo text.</span>

                        <button type="submit"
                                className={this.state.inputText.length > 0 ? 'logomator-btn' : 'logomator-btn btn-disabled'}>
                            Continue
                        </button>

                    </form>
                </div>
            </div>
        )
    }
}

export default TextInput;