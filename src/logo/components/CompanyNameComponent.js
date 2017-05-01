import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { fadeInDown } from 'react-animations';

class CompanyNameComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { companyName: ''};
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ companyName: event.target.value });
    }


    render() {
        return (
                <div className="logomator-form">

                    <ReactCSSTransitionGroup
                        transitionName="content"
                        transitionAppear={true}
                        transitionAppearTimeout={0}
                        transitionEnter={false}
                        transitionLeave={false}>

                    <span className="orange-bar"></span>
                    </ReactCSSTransitionGroup>
                    <form name="company_name">

                        <ReactCSSTransitionGroup
                            transitionName="content"
                            transitionAppear={true}
                            transitionAppearTimeout={0}
                            transitionEnter={false}
                            transitionLeave={false}>

                            <label htmlFor="company_name">First, what is the name of your business or organization?</label>

                        <input onChange={ this.handleInputChange } ref={text => {
                            this.state.companyName = text
                        }}/>
                        <span className="bottom-label">This will be used as your main logo text.</span>
                        </ReactCSSTransitionGroup>

                        <ReactCSSTransitionGroup
                            transitionName="content"
                            transitionAppear={true}
                            transitionAppearTimeout={0}
                            transitionEnter={false}
                            transitionLeave={false}>
                            <div>
                                <button onClick={ e =>{
                                      e.preventDefault();
                                       this.props.onClick(this.state.companyName.value);
                                       this.props.history.push('/tagline');
                                       }
                                     }
                                        className={ this.state.companyName.length > 0 ? 'logomator-btn' : 'logomator-btn btn-disabled' }>
                                    Continue
                                </button>
                            </div>
                        </ReactCSSTransitionGroup>
                    </form>
                </div>
        )
    }
}

export default CompanyNameComponent;