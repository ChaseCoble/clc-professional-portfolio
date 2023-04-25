import React from "react";
import { Navigate } from "react-router-dom";

export default function Error() {
    
    const handleOnClick = () => {
        <Navigate replace to = "/" />
    }
    
    return (
        <div id = "error-wrapper">
            You have messed up! Turn around!
            <button onClick = {handleOnClick()}> Return to Home </button>
        </div>
    )
}
