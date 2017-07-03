import React from 'react';
import loadingGif from '../../assets/images/loading.gif';
import ChatComponent from '../../components/common/ChatComponent';

const LoadingComponent = ({ isFetching, isGeneratingMoreLogos }) => {
  return (
      <div className={isFetching && !isGeneratingMoreLogos ? "loading-container show" : "loading-container"}>
          <div className="loading">
            <ChatComponent text={<h1>Hang on a second, I’m designing your logo concepts.</h1>} />
            <img src={loadingGif} className="loading-gif" alt="Please wait while I generate your logos."/>
          </div>
        </div>
  );
};

export default LoadingComponent;