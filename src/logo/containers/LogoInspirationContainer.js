import React from 'react';
import LogoInspirationComponent from '../components/LogoInspirationComponent';
import Navbar from '../../components/common/Navbar';
import ChatComponent from '../../components/common/ChatComponent';
import ProgressBarComponent from '../../components/common/ProgressBarComponent';
import HeaderComponent from '../../components/common/HeaderComponent';
import { selectLogoInspiration } from '../actions';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const LogoInspiration = withRouter(({ companyName, tagline, history, inspirations, onClick}) => {

  const filterInspirations = (companyName, tagline) => {
    const filteredInspirations = [];

    const companyNameSplit = companyName.split(' ');

    // Company name one word and no tagline
    if (companyNameSplit.length === 1 && tagline === '') {
      inspirations.forEach((i) => {
        i.categories.forEach((category) => {
          if (category === 'oneWordNoTagline') {
            filteredInspirations.push(i);
          }
        });
      });
      return filteredInspirations;
    }

    // Company name one word and tagline
    if (companyNameSplit.length === 1 && tagline.length >= 1) {
      inspirations.forEach((i) => {
        i.categories.forEach((category) => {
          if (category === 'oneWordWithTagline') {
            filteredInspirations.push(i);
          }
        });
      });
      return filteredInspirations;
    }

    // Company name two words and no tagline
    if (companyNameSplit.length === 2 && tagline === '') {
      inspirations.forEach((i) => {
        i.categories.forEach((category) => {
          if (category === 'twoWordsNoTagline') {
            filteredInspirations.push(i);
          }
        });
      });
      return filteredInspirations;
    }

    // Company name two words with tagline
    if (companyNameSplit.length === 2 && tagline.length > 1) {
      inspirations.forEach((i) => {
        i.categories.forEach((category) => {
          if (category === 'twoWordsWithTagline') {
            filteredInspirations.push(i);
          }
        });
      });
      return filteredInspirations;
    }

    // Company name three words and no tagline
    if (companyNameSplit.length === 3 && tagline === '') {
      inspirations.forEach((i) => {
        i.categories.forEach((category) => {
          if (category === 'threeWordsNoTagline') {
            filteredInspirations.push(i);
          }
        });
      });
      return filteredInspirations;
    }

    // Company name three words with tagline
    if (companyNameSplit.length === 3 && tagline.length >= 1) {
      inspirations.forEach((i) => {
        i.categories.forEach((category) => {
          if (category === 'threeWordsWithTagline') {
            filteredInspirations.push(i);
          }
        });
      });
      return filteredInspirations;
    }

    // Company name four plus words and no tagline
    if (companyNameSplit.length >= 4 && tagline === '') {
      inspirations.forEach((i) => {
        i.categories.forEach((category) => {
          if (category === 'FourPlusWordsNoTagline') {
            filteredInspirations.push(i);
          }
        });
      });
      return filteredInspirations;
    }

    // Company name four plus words with tagline
    if (companyNameSplit.length >= 4 && tagline.length >= 1) {
      inspirations.forEach((i) => {
        i.categories.forEach((category) => {
          if (category === 'FourPlusWordsWithTagline') {
            filteredInspirations.push(i);
          }
        });
      });
      return filteredInspirations;
    }

    return inspirations;
  };

  let logoInspirations = [];

  const filteredInspirations = filterInspirations(companyName, tagline);

  filteredInspirations.forEach((inspiration) => {
    logoInspirations.push(
      <div>
        <LogoInspirationComponent history={history} inspiration={inspiration} onClick={onClick} />
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <div className="logomator-base inspiration">
        <div className="container" style={{
                paddingBottom: '70px'}}>

          <ChatComponent
            text={<h1><span>Thanks, that helps!</span> Now, let’s figure out how your logo should look. I’ll use the examples below to understand what styles I should incorporate in your logo.</h1>}
            height="80px"
          />
          <div style={{paddingTop: '30px'}}></div>

          <HeaderComponent headerText={"Choose 1 or more logo examples you like."} />

          <div className="logo-inspiration-container">
            {logoInspirations}
          </div>
        </div>
      </div>

      <ProgressBarComponent history={history} inspirations={filteredInspirations} isConceptSelection={true} />
    </div>
  )
});

const mapStateToProps = (state) => ({
  companyName: state.companyName,
  tagline: state.tagline,
  inspirations: state.inspirations
});

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (inspiration) => {
      dispatch(selectLogoInspiration(inspiration))
    }
  }
};

const LogoInspirationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoInspiration);

export default LogoInspirationContainer;