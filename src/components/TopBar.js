import React from "react";
// import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function TopBar() {
    function handleMailTo() {
        window.location.href = 'mailto:coblexdevelopment@gmail.com';
    };
    return (
        <div id = "top-bar-wrapper" className = "theme1">
            <div id = "logo-wrapper">Logo Holder</div>
            <div id = "identification-blurb">
                Profile Picture
                <p>Chase Coble</p>
                <p onClick={ handleMailTo } className = "clickable" > Contact Me </p>
            </div>
            <div id = "nav-collapse-wrapper"> 
                <FontAwesomeIcon icon = { faBars } data-bs-toggle = "collapse dropdown" aria-expanded = "false"  href="#nav-sidebar" className = "clickable theme2 order-2 dropdown-toggle" role = "button" />
                <div className = "collapse collapse-horizontal order-1" id = "nav-sidebar">
                    NavBar
                    {/* <NavBar /> */}
                </div>     
            </div>
        </div>
    )
}