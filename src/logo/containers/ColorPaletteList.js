import React from 'react';
import Navbar from '../../components/common/Navbar';
import ChatComponent from '../../components/common/ChatComponent';
import HeaderComponent from '../../components/common/HeaderComponent';
import ColorPaletteComponent from '../components/ColorPaletteComponent';
import { connect } from 'react-redux';
import { selectColorPalette } from '../actions';

const Palettes = ({ palettes, onClick }) => {

    let paletteArray = [];

    palettes.forEach((palette) => {
        paletteArray.push(
            <ColorPaletteComponent palette={palette} onClick={onClick}/>
        )
    });

    return (
        <div>
            <Navbar />
            <div className="container">
                <ChatComponent text={<h1>Almost done! I just need to know what colors you like to generate colorful logo concepts for you. Don’t worry, you’ll be able to edit your logo colors later.</h1>}/>
                <div className="color-palette-container">
                    <HeaderComponent headerText="Choose up to 3 color styles you like." />
                    {paletteArray}
                </div>
            </div>
        </div>
    )
};

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