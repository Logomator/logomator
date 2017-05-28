import React from 'react';

const ProgressBarComponent = ({ history, inspirations, isGeneratingLogos, onGenerate, state, palettes }) => {

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
          <button className={logosSelected() === 2 ? 'logomator-btn' : 'logomator-btn btn-disabled'}
                  onClick={ e => {
                                e.preventDefault();
                                    history.push('/color-palette');
                                }}>
            Continue
          </button>
        </div>

        <div className={isGeneratingLogos ? '': 'no-show'}>
          <button
            className={palettesSelected() === 3 ? 'logomator-btn generate-logos': 'logomator-btn generate-logos btn-disabled'}
            onClick={ e => {
                                  e.preventDefault();
                                  onGenerate(state);
                                }}>
            Generate Logos
          </button>
        </div>

        <div className={isGeneratingLogos ? 'no-show': 'progress-bar'}>
          <div className="progress-bar-fill" style={{
                    width: logosSelected() * 20 + '%'
                    }}>

          </div>
        </div>

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
  )
};

export default ProgressBarComponent;