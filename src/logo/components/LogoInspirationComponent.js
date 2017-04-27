import React from 'react';
import adaChatBubblePic from '../../assets/images/ada-profile-bubble.png';
import logoInspiration from '../../assets/images/logo-inspirations/GunarBolf.png';

class LogoInspirationComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

                            <div className={this.props.inspiration.isSelected ? 'logo col-md-3 selected' : 'logo col-md-3'} onClick={e => {
                            }}>
                                <img src={this.props.inspiration.img} alt=""/>
                            </div>
        )
    }
}
export default LogoInspirationComponent;