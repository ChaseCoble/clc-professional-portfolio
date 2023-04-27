import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/");
    }
    
    return (
        <div id = "error-wrapper">
            You have messed up! Turn around!
            <button onClick = {handleOnClick}> Return to Home </button>
        </div>
    )
}
