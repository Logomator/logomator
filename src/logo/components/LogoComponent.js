import React from 'react';

const LogoComponent = ({ concept, onClick }) => {
  return (
    <div className="logo col-md-3"
         onClick={e => {
                e.preventDefault();
                onClick();
              }}>
      {{ concept }}
    </div>
  )
};
export default LogoComponent;