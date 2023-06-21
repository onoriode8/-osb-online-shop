import React, { useState, useEffect } from "react";
import { Authentication } from "./components/authentication/authentication";
import { PasswordReset } from "./components/passwordReset/passwordReset";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./container/Home/Home";
import TshirtDetails from "./shopDetails/TshirtDetails/tshirt-details";
import Navigation from "./Layouts/Navigation/Navigation";
import Bottom from "./Layouts/Bottom/Bottom";
import Cart from "./container/dashboard/cart/cart";
import TshirtCheckout from "./components/allCheckoutComponent/TshirtCheckout/tshirtCheckout";
import Order from "./components/Orders/Orders";

function App() {
  const [auth, setAuth] = useState(true);
  const [carts, setCarts] = useState([]);

  console.log("APP.JS")

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

  useEffect(() => {
    console.log("2ND USEEFFECT")
    if(carts.length === 0) return
    const cartData = JSON.parse(localStorage.getItem("cartItems"));
    console.log("Before cartData 1st", cartData)
    setCarts(cartData);
    console.log("2nd cartData before if statement", cartData)
  }, [carts]);


  console.log(carts);

  let user = <header>
          <Switch>
            <Route path="/auth" exact component={Authentication} />
            <Route path="/auth/forgot_password" exact component={PasswordReset} /> 
            <Redirect to="/auth" />
          </Switch>
          <Bottom />
        </header>

  if(auth) {
      user = <header>
            <Navigation />
        <Switch>
            <Route path="/shop" exact component={Home} /> 
            <Route path="/shop/t-shirt/details" exact component={TshirtDetails} />
            <Route path="/cart/all" exact component={Cart} />
            <Route path="/:name/checkout/summary/place-order" exact component={TshirtCheckout} />
            <Route path="/all/:name/order" exact component={Order} />
            <Redirect to="/shop" />
        </Switch>
        <Bottom />
      </header>
  }
  
  return (
    <React.Fragment>
        {user}
    </React.Fragment>
  );
}

export default App;