import React from 'react';

const SurveyComponent = ({ history, email, experience, improvements, mostLiked, onSubmit }) => {
    return (
        <div className="logomator-form">

            <span className="orange-bar"></span>

            <form name="survey">

                <label htmlFor="email" >What is your email address?</label>
                <input name="email"  ref={input => input && input.focus() } onChange={e => {
                    email = e.target.value;
                }} />

                <label htmlFor="experience"
                       style={{
                           fontSize: '20px',
                           paddingTop: '30px'
                        }}>
                    How would you describe your experience using our tool to design your logo?</label>

                <textarea className="logomator-textarea" name="experience" id="" cols="30" rows="10" onChange={e => {
                    experience = e.target.value;
                }}
                          style={{
                            height: '80px'
                          }}></textarea>

                <label htmlFor="most_liked"
                       style={{
                           fontSize: '20px',
                           paddingTop: '30px'
                        }}>
                    What did you like the most about using our tool?</label>

                <textarea className="logomator-textarea" name="most_liked" id="" cols="30" rows="10" onChange={e => {
                    mostLiked = e.target.value;
                }}
                          style={{
                            height: '80px'
                          }}></textarea>

                <label htmlFor="improvements"
                       style={{
                           fontSize: '20px',
                           paddingTop: '30px'
                        }}>
                    If we could improve one thing, what would it be?</label>

                <textarea className="logomator-textarea" name="improvements" id="" cols="30" rows="10" onChange={e => {
                    improvements = e.target.value;
                }}
                          style={{
                            height: '80px'
                          }}></textarea>


                <button
                    style={{
                        width: '171px',
                        marginTop: '30px'
                    }}
                    onClick={ e => {
                              e.preventDefault();
                              const data = {
                                email: email,
                                experience: experience,
                                mostLiked: mostLiked,
                                improvements: improvements
                              };
                              onSubmit(data);
                               // this.props.onClick(this.state.companyName.value);
                               // this.props.history.push('/tagline');
                               }
                             }
                        className="logomator-btn">
                    Submit Answers
                </button>

                <button className="back-btn"
                        style={{marginTop: '30px'}}
                        onClick={ e =>{
                            e.preventDefault();//
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