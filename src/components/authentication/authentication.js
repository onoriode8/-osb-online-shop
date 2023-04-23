import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "../../util/card/card";

export const Authentication = () => {
 
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState();

    const loginHandler = (event) => { 
        event.preventDefault();
        if(email.length === 0 && password.length === 0) {
            alert("Please fill in the form");
            return;
        };
        fetch("http://localhost:5000", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify({
                    email, password 
                })
            }).then(response => {
                response.json();
            }).then(data => {
                alert("Login was successful"); 
            }).catch(err => {
                setError(err.message);
            });
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
                    </form>
                </div>
            </Card>
        </React.Fragment>
    );
};

// export default Authentication;