import React from 'react';
import { getAssets } from '../common/assets';
import { Logo } from "./Logo";
const assets = getAssets();

export const LogoList = ({ logoText }) => {

    let logos = [];
    assets.forEach((asset) => {
        logos.push(<div className="col-lg-4 col-md-4 col-sm-4">
            <Logo
            companyName="HI THERE"

            tagLine="TAGLINE"

            backgroundColor={asset.backgroundColor}

            color={asset.color}
            
            fontFamily={asset.fontFamily}
        /></div>);
    });

    return (
        <div className="selection">
            <div className="row">
                {logos}
            </div>
        </div>
    );
};

export default LogoList;
