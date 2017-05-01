import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const LogoInspirationComponent = ({ inspiration, onClick}) => {
    return (
        <ReactCSSTransitionGroup
            transitionName="content"
            transitionAppear={true}
            transitionAppearTimeout={0}
            transitionEnter={false}
            transitionLeave={false}>
            <div className={inspiration.isSelected ? 'logo col-md-3 selected' : 'logo col-md-3'}
                 onClick={e => {
                    e.preventDefault();
                    onClick(inspiration);
                  }}>
                <img src={inspiration.img} alt=""/>
            </div>
        </ReactCSSTransitionGroup>
    )
};
export default LogoInspirationComponent;