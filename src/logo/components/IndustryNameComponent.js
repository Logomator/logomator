import React from 'react';
import adaChatBubblePic from '../../assets/images/ada-profile-bubble.png';

class IndustryNameComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            industry: '',
            companyDescription: '',
            isIndustrySelected: false
        };
        this.handleSelect = this.handleSelect.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleSelect(event) {
        this.setState({
            industry: event.target.value,
            isIndustrySelected: true
        });
    }

    handleInputChange(event) {
        this.setState({
            companyDescription: event.target.value
        });
    }

    render() {
        return (
          <div className="logomator-form">

              <span className="orange-bar"></span>

              <form name="industry_name">

                  <label htmlFor="industry">What industry do you think <span>{this.props.companyName}</span> is most related to?</label>

                        <div style={{position: 'relative'}}>
                            <div className="select-triangle"></div>
                        </div>

                        <div style={{marginTop: '30px'}}>
                            <label htmlFor="company_description">Describe what <span>{this.props.companyName}</span> does and what you want your logo to convey.</label>

                            <textarea onChange={this.handleInputChange} className="logomator-textarea" name="company_description" id="" cols="30" rows="10" placeholder="We sell pizzas and italian sandwiches to hungry customers in downtown Boston, Massachusetts. We want our logo to be modern and playful with bright colors."></textarea>
                        </div>

                        <button className={this.state.companyDescription.length > 0 ? 'logomator-btn' : 'logomator-btn btn-disabled'} style={{marginTop: '30px'}} onClick={ e =>{
                              e.preventDefault();
                              this.props.history.push('/inspiration');
                              this.props.onClick(this.state.companyDescription);
                              }}>
                            Continue
                        </button>

                        <button className="back-btn" style={{marginTop: '30px'}} onClick={ e =>{
                            e.preventDefault();
                            this.props.history.push('/tagline');
                            }}>
                            Back
                        </button>
                    </form>
                </div>
        )
    }
}

export default IndustryNameComponent;