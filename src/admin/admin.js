import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Users from "./pages/users/users";
import View from "./view/view";
import Orders from "./pages/orders/orders";
import Authentication from "./pages/authentication/authentication";


const Admin = () => {
   const [adminToken, setAdminToken] = useState(null); // pass admin data from backend
   const [adminId, setAdminId] = useState(null);
   const [adminEmail, setAdminEmail] = useState(null);

   useEffect(() => {
        const data = sessionStorage.getItem("admin");
        const adminData = JSON.parse(data);
        if(adminData === null || adminData === undefined) {
            return;
        }
        setAdminToken(adminData.token);
        setAdminId(adminData.id);
        setAdminEmail(adminData.email)
   }, []);

   console.log("from useEffect", adminToken, adminId, adminEmail)

    let adminRoutes = <div style={{margin: "4em"}}>
     <Switch>
        <Route path="/admin/adminLogin" exact component={Authentication} />
     </Switch>
     </div>;

    if(adminToken === null) { {/* work on the condition statement once the admin signin*/}
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

const mapStateToProps = state => {
    return {
        id: state.adminReducer.id,
        token: state.adminReducer.token,
        email: state.adminReducer.email
    }
}

export default connect(mapStateToProps)(Admin);