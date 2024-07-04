import React from "react";
import logoSrc from '../../../helper/images/logo/logo.png'

export default function MobileTopBar(){
    return(
        <div className = "mobile-top-bar">
            <img src={logoSrc} alt= "Coble X Development" id = "mobile-logo" />
            <a className = 'mob-nav-link' href = "/">Home</a>
            <a className = "mob-nav-link" href="/m/about">More Info</a>
        </div>
    )
}
