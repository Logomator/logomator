import React from 'react';

class ColorPaletteComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={ this.props.palette.isDisabled ? 'color-palette col-5 disabled': 'color-palette col-5'}
                 onClick={e => {
                    e.preventDefault();
                    this.props.onClick(this.props.palette.name);
                 }}>

                <div className={this.props.palette.isDisabled ? 'palette disabled': 'palette'} style={{
                     outline: this.props.palette.isSelected ? '3px solid #F5530C': ''
                }}>
                    <div>
                        <div className="color" style={{
                            backgroundColor: this.props.palette.hexcodes[0]
                        }}>
                        </div>

                        <div className="color" style={{
                            backgroundColor: this.props.palette.hexcodes[1]
                        }}>
                        </div>

                        <div className="color" style={{
                            backgroundColor: this.props.palette.hexcodes[2]
                        }}>
                        </div>

                        <div className="color" style={{
                            backgroundColor: this.props.palette.hexcodes[3]
                           }}>
                        </div>
                    </div>
                    <p className="color-label">{this.props.palette.name}</p>
                </div>
            </div>
        );
    }
}

export default ColorPaletteComponent;