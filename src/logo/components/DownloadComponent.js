import React from 'react';
import ChatComponent from '../../components/common/ChatComponent';

const DownloadComponent = ({history, onClick, logo}) => {
  return (
    <div className="loading-container show">
      <div className="loading">
        <ChatComponent text={<h1><span>Thanks for your feedback!</span> Click below to download your logo fies.</h1>} />
        <button className="logomator-btn" onClick={e => {
          e.preventDefault();
          onClick(logo)
          }}
                style={{ width: '143px', height: '40px', marginTop: '30px'}}>Download Logo</button>
      </div>
    </div>
  );
};

export default DownloadComponent;