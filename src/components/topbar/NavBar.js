import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    
    return(
        <nav id = "nav-bar-wrapper" className="primary-navigation">
            <ul>
                <li><FontAwesomeIcon icon = { faBars } className = "clickable theme2 dropdown" id="nav-symbol" role = "button"/>
                    <ul className = "dropdown">
                        <li><a className = 'nav-link' href = "/">Home</a></li>
                        <li><a className = "nav-link" href="/about">About</a></li>
                    </ul>
                </li>
            </ul>    
        </nav>
    )
}