import React from 'react';
import { getAssets } from '../data/assets';
import { Logo } from "./Logo";
const assets = getAssets();

export const LogoList = ({ companyName, tagLine }) => {

    let logos = [];
    assets.forEach((asset) => {
        logos.push(<div className="col-lg-4 col-md-4 col-sm-4">
            <Logo
            companyName={companyName}
            tagLine={tagLine}
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
