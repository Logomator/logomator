import React from 'react';

const setInnerHTML = (concept) => {
  return { __html: concept}
}

const LogoComponent = ({ concept, selectLogo, history }) => {
  return (
    <div className="logo col-md-3" style={{ paddingLeft: '0'}}>
      <div className="concept" dangerouslySetInnerHTML={setInnerHTML(concept)}></div>
      <div className="get-logo-files">
        <button
          className="logomator-btn"
          style={{
              height: '40px',
              width: '154px',
              background: '#F5530C',
              marginTop: '10px',
              padding: '0'
            }}
            onClick={ e => {
              e.preventDefault();
              selectLogo(concept)
              history.push('/survey');
            }}>
          Get Logo Files
        </button>
      </div>
    </div>
  )
};
export default LogoComponent;