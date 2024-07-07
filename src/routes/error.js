import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../helper/images/images/BillyB.jpg"

export default function Error() {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/");
    }
    
    return (
        <div id = "error-wrapper">
            You bloody broke it chap! Go home!
            <img src = {image} alt = "Billy Butcher from The Boys" />
            <button onClick = {handleOnClick}> Return to Home </button>
        </div>
    )
}
