import React from 'react';
import LogoComponent from '../components/LogoComponent';
import Navbar from '../../components/common/Navbar';
import ChatComponent from '../../components/common/ChatComponent';
import { connect } from 'react-redux';
import ProgressBar from '../../components/common/ProgressBarComponent';
import LoadingComponent from '../../components/common/LoadingComponent';
import { fetchMoreLogos } from '../actions';

const LogoList = ({ concepts, generateMoreConcepts, isFetching, state }) => {
  const logos = [];

  concepts = concepts || [];

  concepts.forEach((concept) => {
    logos.push(
      <div>
        <LogoComponent concept={concept} />
      </div>
    )
  });

  return (
    <div>
      <LoadingComponent isFetching={isFetching} />
      <Navbar />
      <div className="logomator-base inspiration">
        <div className="container" style={{ paddingBottom: '70px' }}>

          <ChatComponent
            text={
            <h1>
              <span>Here are the first set of logos I’ve designed for you!</span> Once you’ve found the perfect logo, just download it. If not, teach me what you like by clicking the hearts and I’ll design your more logos based on them.
            </h1>}
          />

          <div className="logo-inspiration-container" style={{ paddingTop: '40px' }}>
            {logos}
          </div>

        </div>
      </div>
      <ProgressBar isGeneratingLogos={true} isGeneratingConcepts={true} generateMoreConcepts={generateMoreConcepts} state={state}/>
    </div>
  )
};

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  concepts: state.concepts,
  state: state
});

const mapDispatchToProps = (dispatch) => ({
  generateMoreConcepts: (state) => {
    dispatch(fetchMoreLogos(state));
  }
});

const LogoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogoList);

export default LogoListContainer;