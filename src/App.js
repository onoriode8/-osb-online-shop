import React, { useState, useContext, useEffect } from "react";
import { connect } from "react-redux";
import Authentication  from "./components/authentication/authentication";
import SignUp  from "./components/authentication/signup-authentication"
import { PasswordReset } from "./components/passwordReset/passwordReset";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./container/Home/Home";
import BagDetails from "./shopDetails/bagDetails/bag-details";
import PressingIronDetails from "./shopDetails/pressingIronDetails/pressingIron-details";
import BlenderDetails from "./shopDetails/blenderDetails/blender-details";
import TshirtDetails from "./shopDetails/TshirtDetails/tshirt-details";
import WatchDetails from "./shopDetails/WatchDetails/watch-details";
import ShoeDetails from "./shopDetails/shoeDetails/shoe-details";
import Navigation from "./Layouts/Navigation/Navigation";
// import Bottom from "./Layouts/Bottom/Bottom";
import Cart from "./container/dashboard/cart/cart";
import PressingIronCheckout from "./components/allCheckoutComponent/pressingIronCheckout/pressingIronCheckout"
import BlenderCheckout from "./components/allCheckoutComponent/blenderCheckout/blenderCheckout"
import BagCheckout from "./components/allCheckoutComponent/bagCheckout/bagCheckout";
import TshirtCheckout from "./components/allCheckoutComponent/TshirtCheckout/tshirtCheckout";
import WatchCheckout from "./components/allCheckoutComponent/watchCheckout/watchCheckout";
import ShoeCheckout from "./components/allCheckoutComponent/shoeCheckout/shoeCheckout";
import Order from "./components/Orders/Orders";
import { AuthContext } from "./hooks/auth-context";
import AuthContextProvider from "./hooks/auth-context";

function App(props) {
  const [dataToken, setDataToken] = useState(null);
  const [userId, setUserId] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [username, setUsername] = useState(null);

  const context = useContext(AuthContext);

  console.log("context from App", context);

  useEffect(() => {
    // sessionStorage.removeItem("auth")
      const parseData = sessionStorage.getItem("auth");
      const dataParsed = JSON.parse(parseData);
      if(!dataParsed) return;
      console.log("useEffect from App", dataParsed);
      setDataToken(dataParsed.token); setUserId(dataParsed.id);
      //setUsername(dataParsed.username); // setEmail(dataParsed.email); 
      props.retrievedDataHandler(dataParsed.token, dataParsed.email,
         dataParsed.userId, dataParsed.username, dataParsed.image);
  }, [props]);

  // console.log("from redux authreducer", props);
  
  let user = <header>
          <Switch>
            <Route path="/auth" exact component={Authentication} />
            <Route path="/auth/signup" exact component={SignUp} />
            <Route path="/auth/forgot_password" exact component={PasswordReset} /> 
            <Route path="/shop" exact component={Home} /> 
            <Route path="/shop/t-shirt/details" exact component={TshirtDetails} />
            <Route path="/shop/watch/details" exact component={WatchDetails} />
            <Route path="/shop/shoe/details" exact component={ShoeDetails} />
            <Route path="/shop/bag/details" exact component={BagDetails} />
            <Route path="/shop/pressingIron/details" exact component={PressingIronDetails} />
            <Route path="/shop/blender/details" exact component={BlenderDetails} />
            <Route path="/cart/all" exact component={Cart} />  
            <Redirect to="/auth" />
          </Switch>
          {/* <Bottom /> */}
        </header>

  if(props.authentication || props.token || dataToken || userId) {
      user = <header>
        <Switch>
            <Route path="/shop" exact component={Home} /> 
            <Route path="/shop/bag/details" exact component={BagDetails} />
            <Route path="/shop/pressingIron/details" exact component={PressingIronDetails} />
            <Route path="/shop/blender/details" exact component={BlenderDetails} />
            <Route path="/shop/t-shirt/details" exact component={TshirtDetails} />
            <Route path="/shop/watch/details" exact component={WatchDetails} />
            <Route path="/shop/shoe/details" exact component={ShoeDetails} />
            <Route path="/cart/all" exact component={Cart} />
            <Route path={`/${props.username}/checkout/summary/place-order/bag`} exact component={BagCheckout} />
            <Route path={`/${props.username}/checkout/summary/place-order/pressingIron`} exact component={PressingIronCheckout} />
            <Route path={`/${props.username}/checkout/summary/place-order/blender`} exact component={BlenderCheckout} />
            <Route path={`/${props.username}/checkout/summary/place-order/tshirt`} exact component={TshirtCheckout} />
            <Route path={`/${props.username}/checkout/summary/place-order/watch`} exact component={WatchCheckout} />
            <Route path={`/${props.username}/checkout/summary/place-order/shoe`} exact component={ShoeCheckout} />
            {props.username === null ? null : <Route path={`/all/${props.username}/order`} exact component={Order} />}
            <Route path={`/${props.username}/account-settings/`} 
             exact component={() => <h1 style={{margin: "5em 0px"}}>hello settings</h1>} />
            <Redirect to="/shop" />
        </Switch>
        {/* <Bottom /> */}
      </header>
  }
  
  return (
    <React.Fragment>
        <Navigation />
        <AuthContextProvider> 
          {user}
        </AuthContextProvider>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    authentication: state.authReducer.authentication,
    token: state.authReducer.token,
    username: state.authReducer.username
  }
};

const mapDispatchToProps = dispatch => {
  return {
    retrievedDataHandler: (token, email, id, username, image) => dispatch(
       { type: "LOGIN", payload: {id: id, email: email, token: token, username: username, image: image} })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);