import React, {useContext, useState} from "react";
import {authContext} from "../authentication/authContext";
import { useNavigate } from "react-router-dom";
import loginPicture from "../../helper/images/images/loginPicture.jpg"

export default function Login(){
    const { authed, setAuthed} = useContext(authContext);
    const [value, setValue] = useState({});
    const navigate = useNavigate();

    
    function handleChange(event){
        setValue({
            ...value,
            [event.target.name]: event.target.value
        })
    }
    function handleUnsuccessfulAuth(){
        setAuthed(false);
        window.alert('Wrong email or password!')
    }
    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(value.email, value.password);
        try {
            const response = await fetch('https://api.devcamp.space/sessions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include',
              body: JSON.stringify({
                client: {
                   email: value.email,
                   password: value.password
               }
              })
            });
            const data = await response.json();
            (data.status === 'created') ? setAuthed(true) : handleUnsuccessfulAuth();    
          } catch (error) {
            console.log(error);
          }
    }
    function logOut() {
        setAuthed(false);
    }
    return(
        <div className="log-in-wrapper">
            {authed === true ? 
                (<div className="logged-in-wrapper">
                    <div className="logged-in-header">
                        <h1>Welcome Master Chase!</h1>
                    </div>
                    <div className="logged-in-body">
                        <p>Would you like to sign out or access the Management Menu?</p>
                        <div className="logged-in-button-wrapper">
                            <button className="logged-in-btn" id = "Sign Out" type="button" onClick={logOut}>Sign Out</button>
                            <button className="logged-in-btn" id = "Management" type="button" onClick={()=>{navigate('/auth/management')}}>Management</button>
                        </div>
                    </div>
                </div>) : 
                (<div className="logged-out-wrapper">
                    <div className="logged-out-left">
                        <div className="logged-out-header">
                            <h1>Welcome!</h1>
                            <p>Please Log In</p>
                        </div>
                        <div className="logged-out-form">
                            <form onSubmit={handleSubmit} className="form-wrapper">
                                <div className="form-input-wrapper">
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        value = {value.email}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value = {value.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="login-btn-wrapper">
                                    <button className="login-btn" id = "login" type="submit">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="logged-out-right">
                        <img src={loginPicture} alt = "illustration" />
                    </div>
                </div>
                )
            }
        </div>
    )
}