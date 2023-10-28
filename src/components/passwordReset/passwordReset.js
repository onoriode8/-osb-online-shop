import React, { useState } from "react";
// import Card from "../../util/card/card";
import UIPassword from "./ui_password";
import UpdatePassword  from "./UpdatePassword";
// import axios from "axios";


const PasswordReset = () => {
    const [ formSubmittion, setFormSubmittion ] = useState(false);
    const [ email, setEmail ] = useState("");
    const [ code, setCode ] = useState();
    const [ error, setError ] = useState(null);
    const [ spinner, setSpinner ] = useState(false);
    const [ retrievedUser, setRetrievedUser ] = useState();
    const [ showUpdatePasswordComponent, setShowUpdatePasswordComponent ] = useState(false);


    console.log("EMAIL", email);
    console.log("CODE", code);
    const getCodeHandler = async (event) => {
        event.preventDefault();
        if(email.length === 0) {
            // throw new Error("Email Can't Be Empty!");
            alert("Email Can't Be Empty!")
            return 
        }
        setSpinner(true)
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
             setSpinner(false)
            setFormSubmittion(true);
            setRetrievedUser(responseData);
            alert('Enter the 6 digits pin sent to your email');
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
        setSpinner(true)
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
            setSpinner(false);
            setShowUpdatePasswordComponent(true);
        } catch(err) {
            setError(err.message); 
        }
    };

    return (
        <React.Fragment>
            <UIPassword passwordResetComponent={true} spinner={spinner} 
                error={error} setEmail={setEmail} 
                sendCodeHandler={sendCodeHandler} retrievedUser={retrievedUser}
                formSubmittion={formSubmittion} setCode={setCode}
                getCodeHandler={getCodeHandler}/>
            {/* <Card displayProps={error !== null ? error : "Reset Password"}>
                {!formSubmittion && <div>
                    <form onSubmit={getCodeHandler}>
                        <label htmlFor="email">Enter Email</label><br />
                        <input type="text" id="email" placeholder="email"
                             onChange={(event) => setEmail(event.target.value)} /><br /><br />
                        <button type="submit">Get Code</button>
                    </form>
                </div>}
                {formSubmittion && <div>
                    <form onSubmit={sendCodeHandler}>
                        <label htmlFor="password">Reset Password</label><br />
                        <p>Welcome {retrievedUser.username}</p>
                        <input id="password" type="text" placeholder="Enter Code"
                          onChange={(e)=> setCode(e.target.value)}/><br /><br />
                        <button type="submit">Change password</button>
                    </form>
                </div>}
            </Card> */}
            {/* {showUpdatePasswordComponent &&  */}
            <UpdatePassword
            showUpdatePasswordComponent={showUpdatePasswordComponent} user={retrievedUser}/>
            {/* } */}
        </React.Fragment>
    );
};

export default PasswordReset;