import React, {useContext, useState} from "react";

export default function Auth() {
    // [setLogin, login ] = useState()
    
    // const handleSubmit = (event) => {
    //     event.preventDefault();
        
    //     fetch('https://api.devcamp.space/sessions', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //           client: {
    //             email: email,
    //             password: password
    //           }
    //         }),
    //         credentials: 'include' 
    //       })
    //       .then(response => response.json())
    //       .then(data => {
    //           if (data.status === 'created') {
    //             handleSuccessfulAuth(data);
    //           } else {
    //             handleUnSuccessfulAuth(data.error);
    //           }
    //       })
    //       .catch(error => handleUnSuccessfulAuth(error));
      // }
      const authQuote = 'Login';
      // function handleSuccessfulAuth() {

      // }
    return(
        <div id = "auth-page-wrapper">
            <div id = "auth-left-wrapper">
                <div id = "auth-quote-wrapper">
                    {authQuote}
                </div>
            </div>
        </div>
    )
}