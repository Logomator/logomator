import React from 'react';

class CompanyNameComponent extends React.Component {
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
                <div className="logomator-form">

                    <span className="orange-bar"></span>

                    <form name="company_name">

                        <label htmlFor="company_name">First, what is the name of your business or organization?</label>
                        <input onChange={ this.handleInputChange } type="text" autoFocus={true} ref={input => {
                        this.state.companyName = input;
                    }}/>

                        <span className="bottom-label">This will be used as your main logo text.</span>

                        <button onClick={ e =>{
                              e.preventDefault();
                               this.props.onClick(this.state.companyName.value);
                               this.props.history.push('/tagline');
                               }
                             }
                                className={ this.state.companyName.length > 0 ? 'logomator-btn' : 'logomator-btn btn-disabled' }>
                            Continue
                        </button>
                    </form>
                </div>
        )
    }
}

export default CompanyNameComponent;