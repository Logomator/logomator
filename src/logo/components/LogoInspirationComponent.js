import React from 'react';

const LogoInspirationComponent = ({ inspiration, onClick}) => {
    return (
        <div className={inspiration.isSelected ? 'logo col-md-3 selected' : 'logo col-md-3'}
             onClick={e => {
                e.preventDefault();
                onClick(inspiration);
              }}>
            <img src={inspiration.img} alt=""/>
        </div>
    )
};
export default LogoInspirationComponent;