import React from 'react';
import Navbar from '../../components/common/Navbar';
import ChatComponent from '../../components/common/ChatComponent';
import HeaderComponent from '../../components/common/HeaderComponent';
import ColorPaletteComponent from '../components/ColorPaletteComponent';
import ProgressBarComponent from '../../components/common/ProgressBarComponent';
import LoadingComponent from '../../components/common/LoadingComponent';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { selectColorPalette, fetchLogos } from '../actions';

const Palettes = withRouter(({ palettes, onClick, isFetching, state, onGenerate, history}) => {

    let paletteArray = [];

    palettes.forEach((palette) => {
        paletteArray.push(
          <ColorPaletteComponent palette={palette} onClick={onClick}/>
        )
    });

    return (
      <div>
          <LoadingComponent isFetching={isFetching} />
          <Navbar />
          <div className="logomator-base">
              <div className="container" style={{
                    maxWidth: '920px',
                    paddingBottom: '30px'
                }}>
                  <ChatComponent text={<h1><span>Almost done!</span> I just need to know what colors you like to generate colorful logo concepts for you.</h1>} />
                  <div className="color-palette-container">
                    <HeaderComponent headerText="Choose up to 2 color styles you like." />
                    {paletteArray}
                  </div>
              </div>
          </div>
          <ProgressBarComponent history={history} isGeneratingLogos={true} isColorSelection={true} palettes={palettes} state={state} onGenerate={onGenerate} />
      </div>
    )
});

const mapStateToProps = (state) => ({
    state: state,
    isFetching: state.isFetching,
    palettes: state.palettes
});

const mapDispatchToProps = (dispatch) => ({
    onClick: (name) => {
        dispatch(selectColorPalette(name));
    },
    onGenerate: (state) => {
        dispatch(fetchLogos(state));
    }
});

const ColorPaletteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Palettes);

export default ColorPaletteList;