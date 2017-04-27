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

                        <label htmlFor="industry">What industry do you think <strong>{this.props.companyName}</strong> is most related to?</label>

                        <div className="select-triangle"></div>
                        <select value={this.state.industry} onChange={this.handleSelect}>
                            <option selected value="''">Select Industry</option>
                            <option value="accounting">Accounting &amp; Financial</option>
                            <option value="agriculture">Agriculture</option>
                            <option value="animals">Animal &amp; Pet</option>
                            <option value="architectural">Architectural</option>
                            <option value="art">Art &amp; Design</option>
                            <option value="attorney">Attorney &amp; Law</option>
                            <option value="automotive">Automotive</option>
                            <option value="bar">Bar &amp; Nightclub</option>
                            <option value="business">Business &amp; Consulting</option>
                            <option value="children">Childcare</option>
                            <option value="cleaning">Cleaning &amp; Maintenance</option>
                            <option value="communications">Communications</option>
                            <option value="community">Community &amp; Non-Profit</option>
                            <option value="computer">Computer</option>
                            <option value="construction">Construction</option>
                            <option value="cosmetics">Cosmetics &amp; Beauty</option>
                            <option value="dating">Dating</option>
                            <option value="education">Education</option>
                            <option value="entertainment">Entertainment &amp; The Arts</option>
                            <option value="environment">Environmental</option>
                            <option value="fashion">Fashion</option>
                            <option value="floral">Floral</option>
                            <option value="food">Food &amp; Drink</option>
                            <option value="games">Games &amp; Recreational</option>
                            <option value="home">Home Furnishing</option>
                            <option value="industrial">Industrial</option>
                            <option value="internet">Internet</option>
                            <option value="landscaping">Landscaping</option>
                            <option value="medical">Medical &amp; Pharmaceutical</option>
                            <option value="photography">Photography</option>
                            <option value="physical">Physical Fitness</option>
                            <option value="politics">Political</option>
                            <option value="realestate">Real Estate &amp; Mortgage</option>
                            <option value="religious">Religious</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="retail">Retail</option>
                            <option value="security">Security</option>
                            <option value="spa">Spa &amp; Esthetics</option>
                            <option value="sports">Sport</option>
                            <option value="technology">Technology</option>
                            <option value="travel">Travel &amp; Hotel</option>
                            <option value="wedding">Wedding Service</option>
                        </select>


                        <div className={this.state.industry.length > 0 ? 'show' : 'no-show'} style={{marginTop: '40px'}}>
                            <label htmlFor="company_description">Describe what <strong>{this.props.companyName}</strong> does and what you want your logo to convey.</label>

                            <textarea onChange={this.handleInputChange} className="logomator-textarea" name="company_description" id="" cols="30" rows="10" placeholder="We sell pizzas and italian sandwiches to hungry customers in downtown Boston, Massachusetts. We want our logo to be modern and playful with bright colors."></textarea>
                        </div>

                        <button className={this.state.companyDescription.length > 0 && this.state.industry.length > 0 ? 'logomator-btn' : 'logomator-btn btn-disabled'} style={{marginTop: '40px'}} onClick={ e =>{
                              e.preventDefault();
                              this.props.history.push('/inspiration');
                              this.props.onSelect(this.state.industry);
                              this.props.onClick(this.state.companyDescription);
                              }}>
                            Continue
                        </button>

                        <button className="back-btn" style={{marginTop: '40px'}} onClick={ e =>{
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