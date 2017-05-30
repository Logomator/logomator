import React from 'react';

const setInnerHTML = (concept) => {
  return { __html: concept}
}

const LogoComponent = ({ concept }) => {
  return (
    <div className="logo col-md-3" dangerouslySetInnerHTML={setInnerHTML(concept)}>
    </div>
  )
};
export default LogoComponent;