import React from "react";
import logoSrc from '../../helper/images/logo/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faMessage } from "@fortawesome/free-solid-svg-icons/faMessage";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
    const navigate = useNavigate();
    function handleLogoClick(){
        navigate("/");
    }
    return (
        <div id="top-bar-wrapper" className="theme1">
            <div id="logo-wrapper" className = "clickable" onClick = {handleLogoClick}><img src={logoSrc} alt="Coble X Development" id='logo' data-tooltip="Coble X Development" data-tooltip-conf="right" /></div>
            <div id="identification-blurb">
                <p id="name-tag">Chase Coble</p>
                <div className="contact-link">
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faPhone} className="clickable icon" href="tel:7853975295" />
                        <FontAwesomeIcon icon={faMessage} className="clickable icon" href="sms:7853975295" />
                    </div>
                    <p>785-397-3136</p>
                </div>
                <div className="contact-link">
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faEnvelope} className="clickable icon" href="mailto:chasecobledevelopment@gmail.com" />
                    </div>
                    <p>chasecobledevelopment@gmail.com</p>
                </div>
            </div>
            <div id="nav-wrapper">
                <a className = "nav-link" href = "/about"> More professional Information </a>
            </div>
        </div>
    )
}
