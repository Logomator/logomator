import React from "react";

export const Logo = ({ companyName, tagLine, icon, backgroundColor, color, fontFamily }) => {
    return (
        <div
            className="logo"
            style={{backgroundColor: backgroundColor}}>
            <h1 style={{fontFamily: fontFamily, color: color}}>{companyName}</h1>
            <h2 style={{fontFamily: fontFamily, color: color}}>{tagLine}</h2>
        </div>
    );
};

export default Logo;