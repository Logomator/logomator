import React from "react";
import { connect } from 'react-redux';

export let ColorPalette = ({ paletteName, hexcodes, isSelected, onClick}) => {
    hexcodes = hexcodes || [];

    return (
        <div className="color-palette col-5" onClick={onClick}>
            <div className="palette" style={{outline: isSelected ? "3px solid #F5530C": ''}}>
                <div>
                <div className="color" style={{
                    backgroundColor: hexcodes[0]
                }}>

                </div>
                <div className="color" style={{
                    backgroundColor: hexcodes[1]
                }}>

                </div>
                <div className="color" style={{
                    backgroundColor: hexcodes[2]
                }}>

                </div>
                <div className="color" style={{
                    backgroundColor: hexcodes[3]
                }}>

                </div>
                </div>
                <p className="color-label">{paletteName}</p>
            </div>
        </div>
    );
};
ColorPalette = connect()(ColorPalette);
export default ColorPalette;