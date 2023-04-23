import React from "react";
import { Authentication } from "./components/authentication/authentication";
import { PasswordReset } from "./components/passwordReset/passwordReset";
import { Route, Switch, Redirect } from "react-router-dom";

const App = props => {
  // const [file, setFile] = useState();

  // const onChangeHandler = (event) => {
  //   console.log(event.target.file);
  //   setFile(event.target.file);
  // }
  return (
    <React.Fragment>
        {/* <input type="file" style={{display: "none"}} onChange={onChangeHandler}/> */}
        <Switch>
            <Route path="/auth" exact component={Authentication} />
            <Route path="/auth/forgot_password" exact component={PasswordReset} /> 
        </Switch>
        <Redirect to="/auth" />
    </React.Fragment>
  );
}

export default App;