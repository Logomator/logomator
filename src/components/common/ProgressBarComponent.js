import React from 'react';

const ProgressBarComponent = ({ history, inspirations }) => {
    let logosSelected = () => {
        let count = 0;
        inspirations.forEach((i) => {
           if (i.isSelected === true) {
               count++;
           }
        });
        return count;
    };
    logosSelected();
    return (
        <div className="progress">
            <div className="container">
                <button className={logosSelected() === 5 ? 'logomator-btn' : 'logomator-btn btn-disabled'} onClick={ e => {
                            e.preventDefault();

                            }}>
                    Continue
                </button>

                <div className="progress-bar">
                    <div className="progress-bar-fill" style={{
                    width: logosSelected() * 20 + '%'
                    }}>

                    </div>
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