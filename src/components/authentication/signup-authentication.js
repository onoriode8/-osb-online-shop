import React, { useState } from "react";
import { connect } from "react-redux"
import { NavLink } from "react-router-dom";
import Card from "../../util/card/card";
import { Spinner } from "../../util/spinner/spinner";
import Button from "../../util/loginBtn/loginBtn";



const SignUp = props => {
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
            const responseData = await response.json();
            if(!response.ok) {
                throw new Error(responseData);
            };
            setSpinner(false);
            alert("signup successful");
            const dataStored = JSON.stringify(
                {email: responseData.email, token: responseData.token, 
                    username: responseData.username, id: responseData.id, image: responseData.image})
            sessionStorage.setItem("auth", dataStored);
            props.signInFunction(responseData.email, responseData.token, responseData.username, responseData.id, responseData.image);
        } catch(err) {
            setSpinner(false);
            setError(err.message);
        };
    };

    const showPasswordHandler = () => {
        const prevState = showPassword
        setShowPassword(!prevState); 
    };

    const styles = {
        margin: "7px 0px", 
        boxSizing: "border-box", padding: '8px',
        borderTop: 'none', borderLeft: 'none',borderRight: 'none',
        background: 'none', borderBottom: '2px solid #ccc', outline: 'none',
        width: "80%"
    }

    const navStyles= {
        textDecoration: 'none',
        color: 'black'
    }

    const btnStyle = {
        background: "rgba(55, 55, 232, 0.5)", 
        color: "#fff",
        borderRadius: "2em",
        border: "1px solid #fff",
        width: "10em",
        height: "5vh"
    }

    return (
        <React.Fragment>
            <div style={{margin: "4em 0em"}}>
            {spinner && <Spinner />}
            {/* pass errorCard component and props */}
            <Card displayProps={error ? error : "SignUp"}>
                <div style={{textAlign: "center"}}>
                    <form onSubmit={signupHandler}>
                        <input style={styles} type="text" placeholder="username"
                           onChange={(event) => setUsername(event.target.value)} /><br />
                        <input style={styles} required type="email" placeholder="email"
                           onChange={(event) => setEmail(event.target.value)} /><br />
                        <input style={styles} type={showPassword ? "text" : "password"} placeholder="password" 
                           onChange={(event) => setPassword(event.target.value)} /><br />
                        <div onClick={showPasswordHandler} style={{display: "flex", justifyContent: "center"}}>
                            <input type="checkbox"  name="showpsw"/>
                            <div id="showpsw">show Password</div>
                        </div><br />
                        {/* <button style={btnStyle} type="submit">signup</button> */}
                        <Button name='Signup' title='Signup'/>

                        <NavLink style={navStyles} to="/auth/forgot_password"><p>Forgot Password!</p></NavLink>
                        <button style={btnStyle}><NavLink style={navStyles} to="/auth">Switch to SigIn</NavLink></button><br /><br /><hr />
                        <NavLink style={navStyles} to="/auth/admin/login">Admin</NavLink> {/* // click to login for admin. work on the login form of admin later.*/}
                    </form>
                </div>
            </Card>
            </div>
        </React.Fragment>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        signInFunction: (email, token, username, id, image) => dispatch(
            {type: "SIGNIN", payload: {id: id, email: email, token: token, username: username, image: image} })
    }
};

export default connect(null, mapDispatchToProps)(SignUp);