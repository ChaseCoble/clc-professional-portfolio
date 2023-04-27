import React from "react";
import imgsource from "../helper/images/images/underconstruction.jpeg"


export default function UnderConstruction(){
    return(
        <div className="underConstruction-wrapper">
            <div className="underConstruction-image">
                <img src={imgsource} alt="construction site" />
            </div>
            <div className="underConstruction-text">
                <h1>Under Construction</h1>
                <p> I apologize for the inconvenience, but the content manager is under construction due to the limitations of the backend API. When I am logistically able to launch an independent API, construction will resume!</p>
            </div>
        </div>
    )
}