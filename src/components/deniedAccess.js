import React from "react";

export default function DeniedAccess(){
    return(
        <div id="denied-access-wrapper">
            <div id="denied-text-wrapper">
              <p> You have not been given authorization to access this page. If you would like to be authorized, please sign in.</p>
              <a href="/login">Sign in here</a>
            </div>
        </div>
    )
}