import React, {useState} from "react";
import Login from "../components/authentication/login";
import Error from "./error"
import { useParams } from "react-router-dom";
import { authContext } from "../components/authentication/authContext";
import UnderConstruction from "../components/underConstruction";
import TopBar from "../components/topbar/TopBar"

export default function AuthenticationHOC(){
    const fork = useParams();
    const [authed, setAuthed] = useState(false);
    const value = { authed, setAuthed};
    function AuthFork(string){
        switch (string) {
            case 'login':
                return <authContext.Provider value = {value}>
                            <Login />
                        </authContext.Provider>
            case 'management':
                return <authContext.Provider value = {value}>
                            <UnderConstruction/>
                        </authContext.Provider>
            default:
                return <Error />
        }
    }

    return(
        <div className = "auth-hoc-wrapper">
            <TopBar/>
            {AuthFork(fork.fork)}
        </div>
    )
}