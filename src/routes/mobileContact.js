import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faMessage } from "@fortawesome/free-solid-svg-icons/faMessage";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import MobileTopBar from "../components/mobileOnly/components/MobileTopBar";

export default function MobileContact(){
    return(
        <div id="mobile-contact-wrapper">
            < MobileTopBar />
            <div id="mobile-identification-blurb">
                <p id="mobile-name-tag">Chase Coble</p>
                <div className="mobile-contact-link">
                    <div className="mobile-icon-wrapper">
                        <a className="clickable" style={{color: 'inherit'}} href="tel:7852898817"><FontAwesomeIcon icon={faPhone} /></a>
                        <a className="clickable" href="sms:7852898817" style={{color: 'inherit'}}><FontAwesomeIcon icon={faMessage}  /></a>
                    </div>
                    <p>785-877-0458</p>
                </div>
                <div className="mobile-contact-link">
                    <div className="mobile-icon-wrapper">
                        <a className="clickable" href="mailto:coblexdevelopment@gmail.com" style={{color: 'inherit'}}><FontAwesomeIcon icon={faEnvelope}/></a> 
                    </div>
                    <p>chasecobledevelopment@gmail.com</p>
                </div>
            </div>
        </div>
    )
}