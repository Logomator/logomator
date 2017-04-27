import React from 'react';

const ProgressBarComponent = ({ history }) => {
    return (
        <div className="progress">
            <div className="container">
                <button className="logomator-btn btn-disabled" onClick={ e => {
                            e.preventDefault();

                            }}>
                    Continue
                </button>

                <div className="progress-bar">
                    <div className="progress-bar-fill"></div>
                </div>

                <button className="back-btn" onClick={ e =>{
                                e.preventDefault();
                                history.push('/industry');
                                }}>
                    Back
                </button>
            </div>
        </div>
    )
};

export default ProgressBarComponent;