import React, { useState } from "react";
import { Authentication } from "./components/authentication/authentication";
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
import Bottom from "./Layouts/Bottom/Bottom";
import Cart from "./container/dashboard/cart/cart";
import PressingIronCheckout from "./components/allCheckoutComponent/pressingIronCheckout/pressingIronCheckout"
import BlenderCheckout from "./components/allCheckoutComponent/blenderCheckout/blenderCheckout"
import BagCheckout from "./components/allCheckoutComponent/bagCheckout/bagCheckout";
import TshirtCheckout from "./components/allCheckoutComponent/TshirtCheckout/tshirtCheckout";
import WatchCheckout from "./components/allCheckoutComponent/watchCheckout/watchCheckout";
import ShoeCheckout from "./components/allCheckoutComponent/shoeCheckout/shoeCheckout";
import Order from "./components/Orders/Orders";

function App() {
  const [auth] = useState(true);
  
  let user = <header>
          <Switch>
            <Route path="/auth" exact component={Authentication} />
            <Route path="/auth/forgot_password" exact component={PasswordReset} /> 
            {/* <Route path="/shop" exact component={Home} /> 
            <Route path="/shop/t-shirt/details" exact component={TshirtDetails} />
            <Route path="/shop/watch/details" exact component={WatchDetails} />
            <Route path="/cart/all" exact component={Cart} /> */}
            <Redirect to="/auth" />
          </Switch>
          <Bottom />
        </header>

  if(auth) {
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
            <Route path="/:name/checkout/summary/place-order/bag" exact component={BagCheckout} />
            <Route path="/:name/checkout/summary/place-order/pressingIron" exact component={PressingIronCheckout} />
            <Route path="/:name/checkout/summary/place-order/blender" exact component={BlenderCheckout} />
            <Route path="/:name/checkout/summary/place-order/tshirt" exact component={TshirtCheckout} />
            <Route path="/:name/checkout/summary/place-order/watch" exact component={WatchCheckout} />
            <Route path="/:name/checkout/summary/place-order/shoe" exact component={ShoeCheckout} />
            <Route path="/all/:name/order" exact component={Order} />
            <Redirect to="/shop" />
        </Switch>
        <Bottom />
      </header>
  }
  
  return (
    <React.Fragment>
        <Navigation />
        {user}
    </React.Fragment>
  );
}

export default App;