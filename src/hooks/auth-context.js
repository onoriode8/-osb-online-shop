import { useState, useCallback, createContext } from "react";

export const AuthContext = createContext({
    authentication: false,
    token: null,
    email: null,
    username: null,
    login: () => {},
    logout: () => {}
});

const AuthContextProvider = (props) => {
    const [auth, setAuth] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [username, setUsername] = useState(null);


    const loginHandler = useCallback((email,token, username) => {
        setAuth(true);
        setUserToken(token)
        setUserEmail(email)
        setUsername(username);
        console.log({email: email,token: token, username: username})
    }, []);

    const logoutHandler = useCallback(() => {
        setAuth(false);
        setUserToken(null)
        setUserEmail(null)
        setUsername(null);
    }, []);

    return (
        <AuthContext.Provider value={{authentication: auth, token: userToken,
            email: userEmail, username: username, login: loginHandler, logout: logoutHandler}}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;