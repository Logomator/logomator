import { connect } from 'react-redux';
import { ColorPaletteList } from '../components/ColorPaletteList';
import { selectPalette } from '../actions';

const mapStateToProps = (state) => ({
    palettes: state.palettes
});

const mapDispatchToProps = (dispatch) => ({
    onColorPaletteClick: (name) => {
        dispatch(selectPalette(name))
    }
});

const SetColorPalettes = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ColorPaletteList);

export default SetColorPalettes;
