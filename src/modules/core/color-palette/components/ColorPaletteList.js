import React from 'react';
import { ColorPalette } from './ColorPalette';

export const ColorPaletteList = ({ palettes, onColorPaletteClick }) => {
    const colorPalettes = [];

    palettes = palettes || [];

    palettes.forEach((palette) => {
        console.log(palette.isSelected);
        colorPalettes.push(
            <ColorPalette
              isSelected={palette.isSelected}
              onClick={() => onColorPaletteClick(palette.name)}
              hexcodes={palette.hexcodes}
              paletteName={palette.name}
            />
        )
    });
    
    return (
        <div className="color-palette-container container">
            <span className="orange-line"></span>
            <h1>Choose up to 3 color styles you like.</h1>
            <h2>I’ll use this to generate colorful logo concepts for you. Don’t worry, you can edit your logo colors later.</h2>

            { colorPalettes }
        </div>
    )

};

export default ColorPaletteList;