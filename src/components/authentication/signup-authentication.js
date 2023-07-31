import React, { useState } from "react";
import { connect } from "react-redux"
import { NavLink } from "react-router-dom";
import Card from "../../util/card/card";
// import { AuthContext } from "../../hooks/auth-context";
import { Spinner } from "../../util/spinner/spinner";


const SignUp = props => {

    // const context = useContext(AuthContext);

    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState();
    const [ spinner, setSpinner ] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const signupHandler = async (event) => { 
        event.preventDefault();
        setSpinner(true); //remove later

        if(email.length === 0 && password.length === 0 && username.length === 0) {
            alert("Please fill in the form");
            return;
        };
        setSpinner(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_AUTH}/signup`, {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify({
                    email, password, username
                })
            })
            console.log("direct response from server", response);
            const responseData = await response.json();
            if(!response.ok) {
                throw new Error(responseData);
            };
            setSpinner(false);
            alert("signup successful");
            console.log("responseData from signup component", responseData)
            const dataStored = JSON.stringify(
                {email: responseData.email, token: responseData.token, username: responseData.username, id: responseData.id})
            sessionStorage.setItem("auth", dataStored);
            //context.login(responseData.email, responseData.token, responseData.username); //pass the data returned from the backend to context api
            props.signInFunction(responseData.email, responseData.token, responseData.username, responseData.id);
        } catch(err) {
            // setEmail("") 
            // setUsername("") 
            // setPassword("");
            setSpinner(false);
            setError(err.message);
        };
    };

    const showPasswordHandler = (prevState) => {
        setShowPassword(!prevState); 
    };

    return (
        <React.Fragment>
            <div style={{margin: "4em 0em"}}>
            {spinner && <Spinner />}
            {/* pass errorCard component and props */}
            <Card displayProps={error ? error : "SignUp"}>
                <div style={{textAlign: "center"}}>
                    <form onSubmit={signupHandler}>
                        <input style={{margin: "7px 0px"}} type="text" placeholder="username"
                           onChange={(event) => setUsername(event.target.value)} /><br />
                        <input style={{margin: "7px 0px"}} required type="text" placeholder="email"
                           onChange={(event) => setEmail(event.target.value)} /><br />
                        <input style={{margin: "7px 0px"}} type={showPassword ? "text" : "password"} placeholder="password" 
                           onChange={(event) => setPassword(event.target.value)} /><br />
                        <button type="submit">signup</button>
                        <p onClick={showPasswordHandler}>show Password</p>
                        <NavLink to="/auth/forgot_password"><p>Forgot Password!</p></NavLink>
                        <button><NavLink style={{color: "black", 
                          listStyle: "none", textDecoration: "none"}} 
                          to="/auth">Switch to SigIn</NavLink></button><br />
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
        signInFunction: (email, token, username, id) => dispatch(
            {type: "SIGNIN", payload: {id: id, email: email, token: token, username: username} })
    }
};

export default connect(null, mapDispatchToProps)(SignUp);