import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "../../util/card/card";

export const Authentication = () => {
 
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState();

    const loginHandler = async (event) => { 
        event.preventDefault();
        if(email.length === 0 && password.length === 0) {
            alert("Please fill in the form");
            return;
        };
        try {
            const response = await fetch(`http://localhost:5000/authentication`, {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify({
                    email, password 
                })
            })
            
            const responseData = await response.json();
            if(!response.ok) {
                throw new Error(responseData);
            };
            alert("Login successful");
        } catch(err) {
            setError(err.message);
        };
    };

    return (
        <React.Fragment>
            <Card displayProps={error ? error : "SignIn"}>
                <div style={{textAlign: "center"}}>
                    <form onSubmit={loginHandler}>
                        <input style={{margin: "7px 0px"}} type="text" placeholder="email"
                           onChange={(event) => setEmail(event.target.value)} /><br />
                        <input style={{margin: "7px 0px"}} type="password" placeholder="password" 
                           onChange={(event) => setPassword(event.target.value)} /><br />
                        <button type="submit">Login</button>
                        <NavLink to="/auth/forgot_password"><p>Forgot Password!</p></NavLink>
                        <NavLink to="/auth/admin/login">Admin</NavLink> {/* // click to login for admin. work on the login form of admin later.*/}
                    </form>
                </div>
            </Card>
        </React.Fragment>
    );
};

// export default Authentication;