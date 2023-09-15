import React, { useState } from "react";
import Card from "../../util/card/card";
import { UpdatePassword } from "./UpdatePassword";
// import axios from "axios";


export const PasswordReset = () => {
    const [ formSubmittion, setFormSubmittion ] = useState(false);
    const [ email, setEmail ] = useState("");
    const [ code, setCode ] = useState();
    const [ error, setError ] = useState(null);
    const [ retrievedUser, setRetrievedUser ] = useState();
    const [ showUpdatePasswordComponent, setShowUpdatePasswordComponent ] = useState(false);


    console.log("EMAIL", email);
    console.log("CODE", code);
    const getCodeHandler = async (event) => {
        event.preventDefault();
        if(email.length === 0) {
            throw new Error("Email Can't Be Empty!");
        }
        console.log("email before sending to backend", email);
        try {
            const response = await fetch(`${process.env.REACT_APP_AUTH}/resetPassword/getCode`, {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify({
                    email
                })
            });
            console.log("response from backend", response);
            const responseData = await response.json();
            if(!response.ok) {
                throw new Error(responseData);
            };
            setFormSubmittion(true);
            alert(responseData);
            setRetrievedUser(responseData);
        } catch(err) {
            setError(err.message); 
        }
    };

    const sendCodeHandler = async (event) => {
        event.preventDefault();
        if(code.trim().length < 6 || code.trim().length > 6) {
            const error = code.length < 6 ? "Code must be 6 digits" : "Code must not be more than 6 digits";
            throw new Error(error);
        };
        try {
            const response = await fetch(`${process.env.REACT_APP_AUTH}/${retrievedUser.username}/password_reset`, {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify({
                    code: code
                })
            });
            const responseData = await response.json();
            if(!response.ok) {
                throw new Error(responseData);
            };
            setShowUpdatePasswordComponent(true);
        } catch(err) {
            setError(err.message); 
        }
    };

    return (
        <React.Fragment>
            <Card displayProps={error !== null ? error : "Reset Password"}>
                {!formSubmittion && <div>
                    <form onSubmit={getCodeHandler}>
                        <label htmlFor="email">Enter Email</label><br />
                        <input type="text" id="email" placeholder="email"
                             onChange={(event) => {console.log(event.target)
                             setEmail(event.target.value)}} /><br /><br />
                        <button  type="submit">Get Code</button>
                    </form>
                </div>}
                {formSubmittion && <div>
                    <form onSubmit={sendCodeHandler}>
                        <label htmlFor="password">Reset Password</label><br />
                        {/* <p>Welcome {retrievedUser.username}</p> */}
                        <input id="password" type="text" placeholder="Enter Code"
                          onChange={(e)=> setCode(e.target.value)}/><br /><br />
                        <button type="submit">Change password</button>
                    </form>
                </div>}
            </Card>
            {showUpdatePasswordComponent && <UpdatePassword user={retrievedUser}/>}
        </React.Fragment>
    );
};