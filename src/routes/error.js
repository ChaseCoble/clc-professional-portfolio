import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import image from "../helper/images/images/BillyB.jpg"

export default function Error() {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/");
    }
    const errorCode = useParams()
    
    const errorCodeDict = {
        "1" : "You broke it just for fun. Why would you do that?",
        "2" : "Something else."
    }
    const errorQuery = errorCodeDict[parseInt(errorCode)] ? errorCodeDict[parseInt(errorCode)] : ""; 
    return (
        <div id = "error-wrapper">
            {"You bloody broke it chap! " + errorQuery + " Go home!"}
            <img src = {image} alt = "Billy Butcher from The Boys" />
            <button onClick = {handleOnClick}> Return to Home </button>
        </div>
    )
}
