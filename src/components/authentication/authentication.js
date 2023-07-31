import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Card from "../../util/card/card";
import { Spinner } from "../../util/spinner/spinner";
import { AuthContext } from "../../hooks/auth-context";


const Authentication = (props) => {
    const context = useContext(AuthContext);
 
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState();
    const [ spinner, setSpinner ] = useState(false);

    const loginHandler = async (event) => { 
        event.preventDefault();
        if(email.length === 0 && password.length === 0) {
            alert("Please fill in the form");
            return;
        };
        setSpinner(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_AUTH}/authentication`, {
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
            setSpinner(false);
            // alert("Login successful");
            console.log("responseData from login component", responseData)
            console.log("context", context)
            // context.login(responseData.email, responseData.token, responseData.username);
            // history.replace("/shop"); 
            const dataStored = JSON.stringify(
                {email: responseData.email, token: responseData.token, username: responseData.username, id: responseData.id})
            sessionStorage.setItem("auth", dataStored);
            props.loginFunction(responseData.email, responseData.token, responseData.username, responseData.id);
        } catch(err) {
            // setEmail("");
            // setPassword("");
            setSpinner(false);
            setError(err.message);
        };
    };


    return (
        <React.Fragment>
            <div style={{margin: "4em 0em"}}>
            {spinner && <Spinner />}
            <Card displayProps={error ? error : "SignIn"}>
                <div style={{textAlign: "center"}}>
                    <form onSubmit={loginHandler}>
                        <input style={{margin: "7px 0px"}} type="text" placeholder="email"
                           onChange={(event) => setEmail(event.target.value)} /><br />
                        <input style={{margin: "7px 0px"}} type="password" placeholder="password" 
                           onChange={(event) => setPassword(event.target.value)} /><br />
                        <button type="submit">Login</button>
                        <NavLink to="/auth/forgot_password"><p>Forgot Password!</p></NavLink>
                        <div>don't have an account yet! Create one</div>
                        <button><NavLink style={{color: "black", 
                          listStyle: "none", textDecoration: "none"}} 
                          to="/auth/signup">Switch to Signup</NavLink></button><br />
                        <NavLink to="/auth/admin/login">Admin</NavLink> {/* // click to login for admin. work on the login form of admin later.*/}
                    </form>
                </div>
            </Card>
            </div>
        </React.Fragment>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        loginFunction: (email, token, username, id) => dispatch(
            {type: "LOGIN", payload: {id: id, email: email, token: token, username: username} })
    }
};

export default connect(null, mapDispatchToProps)(Authentication);