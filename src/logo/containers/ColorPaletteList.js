import React from 'react';
import Navbar from '../../components/common/Navbar';
import ChatComponent from '../../components/common/ChatComponent';
import HeaderComponent from '../../components/common/HeaderComponent';
import ColorPaletteComponent from '../components/ColorPaletteComponent';
import ProgressBarComponent from '../../components/common/ProgressBarComponent';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { selectColorPalette } from '../actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Palettes = withRouter(({ palettes, onClick, history}) => {

    let paletteArray = [];

    palettes.forEach((palette) => {
        paletteArray.push(
            <ColorPaletteComponent palette={palette} onClick={onClick}/>
        )
    });

    return (
        <div>
            <Navbar />
            <div className="container" style={{paddingBottom: '179px'}}>
                <ChatComponent text={<h1>Almost done! I just need to know what colors you like to generate colorful logo concepts for you. Don’t worry, you’ll be able to edit your logo colors later.</h1>} />
                <ReactCSSTransitionGroup
                    transitionName="content"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div className="color-palette-container">
                        <HeaderComponent headerText="Choose up to 3 color styles you like." />
                        {paletteArray}
                    </div>
                </ReactCSSTransitionGroup>
            </div>
            <ReactCSSTransitionGroup
                transitionName="content"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <ProgressBarComponent history={history} isGeneratingLogos={true} palettes={palettes} />
            </ReactCSSTransitionGroup>
        </div>
    )
});

const mapStateToProps = (state) => ({
    palettes: state.palettes
});

const mapDispatchToProps = (dispatch) => ({
    onClick: (name) => {
        dispatch(selectColorPalette(name));
    }
});

const ColorPaletteList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Palettes);

export default ColorPaletteList;