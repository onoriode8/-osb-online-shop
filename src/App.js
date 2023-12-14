import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Authentication  from "./components/authentication/authentication";
import SignUp  from "./components/authentication/signup-authentication"
import asyncComponent from "./hoc/asyncComponent";
import { Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./Layouts/Navigation/Navigation";
import PressingIronCheckout from "./components/allCheckoutComponent/pressingIronCheckout/pressingIronCheckout"
import BlenderCheckout from "./components/allCheckoutComponent/blenderCheckout/blenderCheckout"
import BagCheckout from "./components/allCheckoutComponent/bagCheckout/bagCheckout";
import TshirtCheckout from "./components/allCheckoutComponent/TshirtCheckout/tshirtCheckout";
import WatchCheckout from "./components/allCheckoutComponent/watchCheckout/watchCheckout";
import ShoeCheckout from "./components/allCheckoutComponent/shoeCheckout/shoeCheckout";
import AuthContextProvider from "./hooks/auth-context";
import Admin from "./admin/admin";



const asyncHome = asyncComponent(() => import("./container/Home/Home"))
const asyncPasswordReset = asyncComponent(() => import("./components/passwordReset/passwordReset"))
const asyncTshirtDetails = asyncComponent(() => import("./shopDetails/TshirtDetails/tshirt-details"))
const asyncWatchDetails = asyncComponent(() => import("./shopDetails/WatchDetails/watch-details"))
const asyncShoeDetails = asyncComponent(() => import("./shopDetails/shoeDetails/shoe-details"))
const asyncBagDetails = asyncComponent(() => import("./shopDetails/bagDetails/bag-details"))
const asyncPressingIronDetails = asyncComponent(() => import("./shopDetails/pressingIronDetails/pressingIron-details"))
const asyncBlenderDetails = asyncComponent(() => import("./shopDetails/blenderDetails/blender-details"))
const asyncOrder = asyncComponent(() => import("./components/Orders/Orders"))
const asyncCart = asyncComponent(() => import("./container/dashboard/cart/cart"))
const asyncSettings = asyncComponent(() => import("./container/settings/settings"))


function App(props) {
  const [dataToken, setDataToken] = useState(null);
  const [userId, setUserId] = useState(null);


  useEffect(() => {
      const parseData = sessionStorage.getItem("auth");
      const dataParsed = JSON.parse(parseData);
      if(!dataParsed) return;
      setDataToken(dataParsed.token); setUserId(dataParsed.id);
      props.retrievedDataHandler(dataParsed.token, dataParsed.email,
         dataParsed.userId, dataParsed.username, dataParsed.image);
  }, [props]);

  
  let user = <header>
          <Switch>
            <Route path="/" exact component={asyncHome} /> 
            <Route path="/auth" exact component={Authentication} />
            <Route path="/auth/signup" exact component={SignUp} />
            <Route path="/auth/forgot_password" exact component={asyncPasswordReset} /> 
            <Route path="/shop/t-shirt/details" exact component={asyncTshirtDetails} />
            <Route path="/shop/watch/details" exact component={asyncWatchDetails} />
            <Route path="/shop/shoe/details" exact component={asyncShoeDetails} />
            <Route path="/shop/bag/details" exact component={asyncBagDetails} />
            <Route path="/shop/pressingIron/details" exact component={asyncPressingIronDetails} />
            <Route path="/shop/blender/details" exact component={asyncBlenderDetails} />
            <Route path="/cart/all" exact component={asyncCart} />  
            <Route path="/admin/adminLogin" exact component={Admin} />
            <Redirect to="/auth" />
          </Switch>
        </header>

  if(props.authentication || props.token || dataToken || userId) {
      user = <header>
        <Switch>
            <Route path="/" exact component={asyncHome} /> 
            <Route path="/shop/bag/details" exact component={asyncBagDetails} />
            <Route path="/shop/pressingIron/details" exact component={asyncPressingIronDetails} />
            <Route path="/shop/blender/details" exact component={asyncBlenderDetails} />
            <Route path="/shop/t-shirt/details" exact component={asyncTshirtDetails} />
            <Route path="/shop/watch/details" exact component={asyncWatchDetails} />
            <Route path="/shop/shoe/details" exact component={asyncShoeDetails} />
            <Route path="/cart/all" exact component={asyncCart} />
            <Route path={`/${props.username}/checkout/summary/place-order/bag`} exact component={BagCheckout} />
            <Route path={`/${props.username}/checkout/summary/place-order/pressingIron`} exact component={PressingIronCheckout} />
            <Route path={`/${props.username}/checkout/summary/place-order/blender`} exact component={BlenderCheckout} />
            <Route path={`/${props.username}/checkout/summary/place-order/tshirt`} exact component={TshirtCheckout} />
            <Route path={`/${props.username}/checkout/summary/place-order/watch`} exact component={WatchCheckout} />
            <Route path={`/${props.username}/checkout/summary/place-order/shoe`} exact component={ShoeCheckout} />
            {props.username === null ? null : <Route path={`/all/${props.username}/order`} exact component={asyncOrder} />}
            <Route path={`/${props.username}/account-settings/`} exact component={asyncSettings} />

            <Redirect to="/" />
        </Switch>
        {/* <Bottom /> */}
      </header>
  };
  
  return (
    <React.Fragment>
        {!props.mount ? <Navigation /> : <h1>ADMIN NAVIGATION HERE</h1>}
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
    username: state.authReducer.username,
    mount: state.adminReducer.mount
  }
};

const mapDispatchToProps = dispatch => {
  return {
    retrievedDataHandler: (token, email, id, username, image) => dispatch(
       { type: "LOGIN", payload: {id: id, email: email, token: token, username: username, image: image} })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);