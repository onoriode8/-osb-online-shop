import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Users from "./pages/users/users";
import View from "./view/view";
import Orders from "./pages/orders/orders";
import Authentication from "./pages/authentication/authentication";


const Admin = () => {
    const [admin, setAdmin] = useState(null);

    let adminRoutes = <div style={{margin: "4em"}}>
     <Switch>
        <Route path="/admin/adminLogin" exact component={Authentication} />
     </Switch>
     </div>;

     if(admin) {
        adminRoutes = <div>
            <View />
            <Switch>
                <Route path="/admin/users" exact component={Users} />
                <Route path="/admin/orders" exact component={Orders} />
            </Switch>
         </div>
     }
     

        return (
            <React.Fragment>
                {adminRoutes}
            </React.Fragment>
        );
};

export default Admin;