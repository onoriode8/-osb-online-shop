import { useState } from "react";
import { connect } from "react-redux";
import Card from "../../../util/card/card";
// import ErrorCard from "../../../util/card/errorCard/errorCard";
// import { AxiosInstance } from "../../../components/axiosInstance/axiosInstance";
import classes from "./authentication.module.css";
import { Spinner } from "../../../util/spinner/spinner";
import * as actionType from "../../../store/adminStore/adminActions/admin-action";

const Authentication = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState();
    const [spinner, setSpinner] = useState();

    const loginHandler = async (event) => {
        event.preventDefault();
        setSpinner(true)
        const data = { 
            email: email,
            password: password
        }
        console.log(email, password)
        try {
        const response = await fetch(process.env.REACT_APP_AUTH + "/admin/adminLogin", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        if(response.ok === false) {
            throw new Error("Failed to login")
        };
        setSpinner(false);
        const responseData = await response.json();
        console.log("request", responseData)
        const adminData = { id: responseData.id, token: responseData.token, email: responseData.email }
        sessionStorage.setItem("admin", JSON.stringify(adminData))
        props.adminDataHandler(responseData.id, responseData.token, responseData.email);
        } catch(err) {
            setSpinner(false)
            setError(err.message);
        };
    };

    const onchangeEmailEvent = (event) => {
        const e = event.target.value;
        setEmail(e);
    };

    const onchangePasswordEvent = (event) => {
        const e = event.target.value;
        setPassword(e)
    }

    return (
        <header>
            {spinner && <Spinner />}
            {error && <Card displayProps error={error}/>}
            <Card displayProps={error ? error : "Admin Authentication"} >
                <form onSubmit={loginHandler}>
                    <label htmlFor="email">Email</label><br />
                    <input className={classes.input} type="email" 
                     onChange={onchangeEmailEvent} placeholder="email" /><br /><br />
                    <label htmlFor="password">Password</label><br />
                    <input className={classes.input} 
                     onChange={onchangePasswordEvent} type={showPassword ? "text" : "password"} placeholder="password" /><br /><br />
                    <div style={{display: "flex", justifyContent: "center"}} onClick={() => setShowPassword(prevState => !prevState)}>
                       <input type='checkBox' />
                       <div>show password</div>
                    </div><br /><br />
                    <button type="submit" title="Login">Login</button>
                </form>
            </Card>
        </header>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        adminDataHandler: (id, token, email) => dispatch({ 
            type: actionType.ADMIN_LOGIN, payload: { id, token, email } 
        })
    }
}

export default connect(null, mapDispatchToProps)(Authentication);