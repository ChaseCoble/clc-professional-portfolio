import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faMessage } from "@fortawesome/free-solid-svg-icons/faMessage";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

export default function MobileContact(){
    return(
        <div id="mobile-contact-wrapper">
            <div id="identification-blurb">
                <p id="name-tag">Chase Coble</p>
                <div className="contact-link">
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faPhone} className="clickable icon" href="tel:7852898817" />
                        <FontAwesomeIcon icon={faMessage} className="clickable icon" href="sms:7852898817" />
                    </div>
                    <p>785-289-8817</p>
                </div>
                <div className="contact-link">
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faEnvelope} className="clickable icon" href="mailto:coblexdevelopment@gmail.com" />
                    </div>
                    <p>coblexdevelopment@gmail.com</p>
                </div>
            </div>
        </div>
    )
}