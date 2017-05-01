import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const HeaderComponent = ({ headerText }) => {

    //noinspection CheckTagEmptyBody
    return (
        <ReactCSSTransitionGroup
            transitionName="content"
            transitionAppear={true}
            transitionAppearTimeout={0}
            transitionEnter={false}
            transitionLeave={false}>
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
        </ReactCSSTransitionGroup>
    )
};

export default HeaderComponent;