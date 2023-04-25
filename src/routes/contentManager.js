import React, {useContext} from "react";
import DeniedAccess from "../components/deniedAccess"
import {authContext} from "../index"

export default function ContentManager() {
    const authed = useContext(authContext)
    return (
        <div id = "content-manager-fork-wrapper">
            {authed === true ?
            <div id="content-manager-wrapper">
                ContentManager
            </div> :
            <DeniedAccess />}
        </div>
    )
}