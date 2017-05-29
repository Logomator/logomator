import React from 'react';
import LogoComponent from '../components/LogoComponent';
import { connect } from 'react-redux';

const LogoList = ({ concepts }) => {

  const logos = [];

  concepts.forEach((concept) => {
    logos.push(
      <LogoComponent concept={concept} />
    )
  });

  return (
    <div>
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
    </div>
  )
};

const mapStateToProps = (state) => ({
  concepts: state.concepts
});

const LogoListContainer = connect(
  mapStateToProps,
  null
)(LogoList);

export default LogoListContainer;