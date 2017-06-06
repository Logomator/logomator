import React from 'react';

const ProgressBarComponent = ({ history, inspirations, isGeneratingLogos, onGenerate, state, palettes, generateMoreConcepts, isGeneratingConcepts }) => {

  let logosSelected = () => {
    let count = 0;
    if (inspirations) {
      inspirations.forEach((i) => {
        if (i.isSelected === true) {
          count++;
        }
      });
    }
    return count;
  };

  let palettesSelected = () => {
    let count = 0;
    if (palettes) {
      palettes.forEach((p) => {
        if (p.isSelected === true) {
          count++;
        }
      });
    }
    return count;
  };

  return (
    <div className="progress">
      <div className="container">
        <div className={isGeneratingLogos ? 'no-show': ''}>
          <button className={logosSelected() >= 1 ? 'logomator-btn' : 'logomator-btn btn-disabled'}
                  onClick={ e => {
                                e.preventDefault();
                                    history.push('/color-palette');
                                }}>
            Continue
          </button>
        </div>

        <div className={isGeneratingConcepts ? 'no-show': ''}>
          <div className={isGeneratingLogos ? '': 'no-show'}>
            <button
              className={palettesSelected() >= 1 ? 'logomator-btn generate-logos': 'logomator-btn generate-logos btn-disabled'}
              onClick={ e => {
                e.preventDefault();
                onGenerate(state);
                history.push('/logos');
              }}>
              Generate Logos
            </button>
          </div>
        </div>

        <div className={isGeneratingConcepts ? '' : 'no-show'} style={{
          textAlign: 'center'
        }}>
          <button
            className="logomator-btn generate-logos"
            style={{
              width: '326px',
              background: '#F5530C',
              float: 'none'
            }}
            onClick={ e => {
                e.preventDefault();
                generateMoreConcepts(state);
              }}>
            Generate More Logos
          </button>
        </div>
        <div className={isGeneratingConcepts ? 'no-show' : ''}>
          <button className={isGeneratingLogos ? 'back-btn generate-logos': 'back-btn'} onClick={ e =>{
                    e.preventDefault();
                    if (isGeneratingLogos) {


                    } else {
                      history.push('/industry');
                    }
                    }}>
            Back
          </button>
          </div>
        </div>
    </div>
  )
};

export default ProgressBarComponent;