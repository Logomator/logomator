import React from 'react';

const SurveyComponent = ({ history }) => {
    return (
        <div className="logomator-form">

            <span className="orange-bar"></span>

            <form name="survey">

                <label htmlFor="email" >First, what email address should we send your logo to?</label>
                <input  ref={input => input && input.focus() } />

                <label htmlFor="experience"
                       style={{
                           fontSize: '20px',
                           paddingTop: '30px'
                        }}>
                    How would you describe your experience using our tool to design your logo?</label>

                <textarea className="logomator-textarea" name="experience" id="" cols="30" rows="10"
                          style={{
                            height: '80px'
                          }}></textarea>

                <label htmlFor="most_liked"
                       style={{
                           fontSize: '20px',
                           paddingTop: '30px'
                        }}>
                    What did you like the most about using our tool?</label>

                <textarea className="logomator-textarea" name="most_liked" id="" cols="30" rows="10"
                          style={{
                            height: '80px'
                          }}></textarea>

                <label htmlFor="improvements"
                       style={{
                           fontSize: '20px',
                           paddingTop: '30px'
                        }}>
                    If we could improve one thing, what would it be?</label>

                <textarea className="logomator-textarea" name="improvements" id="" cols="30" rows="10"
                          style={{
                            height: '80px'
                          }}></textarea>


                <button
                    style={{
                        width: '171px',
                        marginTop: '30px'
                    }}
                    onClick={ e =>{
                              e.preventDefault();
                               // this.props.onClick(this.state.companyName.value);
                               // this.props.history.push('/tagline');
                               }
                             }
                        className="logomator-btn">
                    Email Me My Logo
                </button>

                <button className="back-btn"
                        style={{marginTop: '30px'}}
                        onClick={ e =>{
                            e.preventDefault();
                                // Route back to generate logos
                                history.push('/')
                            }}>
                    Back
                </button>
            </form>
        </div>
    )
};

export default SurveyComponent;