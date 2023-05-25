import React, { useState, useEffect } from "react";
import { Authentication } from "./components/authentication/authentication";
import { PasswordReset } from "./components/passwordReset/passwordReset";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./container/Home/Home";
import TshirtDetails from "./shopDetails/TshirtDetails/tshirt-details";

function App() {
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    if(auth) {
      return;
    }
    const logout = () => {
      setAuth(false);
    }
    logout();
  });
  
  useEffect(() => {
    if(auth) return;
    const login = () => {
      setAuth(true);
    }
    login();
  });


  let user = 
      <Switch>
        <Route path="/auth" exact component={Authentication} />
        <Route path="/auth/forgot_password" exact component={PasswordReset} /> 
        <Redirect to="/auth" />
      </Switch>
  if(auth) {
      user =
      <Switch>
          <Route path="/shop" exact component={Home} /> 
          <Route path="/shop/t-shirt/details" exact component={TshirtDetails} />
          <Redirect to="/shop" />
      </Switch>
  }
  
  return (
    <React.Fragment>
        {user}
    </React.Fragment>
  );
}

export default App;