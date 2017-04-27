import React from 'react';

const HeaderComponent = ({ headerText }) => {

    //noinspection CheckTagEmptyBody
    return (
        <div>
            <span className="orange-bar" style={{
                display: 'block',
                background: '#F5530C',
                height: '4px',
                width: '50px'
                }}>
            </span>

            <h2 style={{
                    fontSize: '20px',
                    color: '#19191A',
                    marginTop: '20px'
                    }}>
                {headerText}
            </h2>
        </div>
    )
};

export default HeaderComponent;