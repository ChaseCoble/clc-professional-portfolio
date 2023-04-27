import {createContext} from "react";

export const authContext = createContext(
    {
        authed: false,
        setAuthed: () => {}
    }
);


    