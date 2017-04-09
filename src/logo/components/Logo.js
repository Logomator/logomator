import React from "react";

export class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="logo"
                style={{backgroundColor: this.props.backgroundColor}}>
                <h1 style={{fontFamily: this.props.fontFamily, color: this.props.color}}>{this.props.textLineOne}</h1>
                <h2 style={{fontFamily: this.props.fontFamily, color: this.props.color}}>{this.props.textLineTwo}</h2>
            </div>
        );
    }
}
