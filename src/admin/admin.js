import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Users from "./pages/users/users";
import View from "./view/view";
import Orders from "./pages/orders/orders";
import Authentication from "./pages/authentication/authentication";
import * as actionType from "../store/adminStore/adminActions/admin-action";


const Admin = (props) => {
   const [adminToken, setAdminToken] = useState(null); // pass admin data from backend
   const [adminId, setAdminId] = useState(null);
   const [adminEmail, setAdminEmail] = useState(null);

   console.log("admin data from admin reducer", props.token, props.id, props.email)

   const adminLogoutHandler = () => {
      setAdminToken(null);
      setAdminId(null);
      setAdminEmail(null);
      props.adminDataHandler(null, null, null)
      sessionStorage.removeItem("admin");
   }

   useEffect(() => {
        const data = sessionStorage.getItem("admin");
        const adminData = JSON.parse(data);
        if(adminData === null || adminData === undefined) {
            return;
        }
        setAdminToken(adminData.token);
        setAdminId(adminData.id);
        setAdminEmail(adminData.email)
        props.adminDataHandler(adminData.id, adminData.token, adminData.email);
   }, [props]);

   console.log("from useEffect", props.token, props.id, props.email)

    let adminRoutes = <div style={{margin: "4em"}}>
     <Switch>
        <Route path="/admin/adminLogin" exact component={Authentication} />
        {/* <Route component={() => <h1>Page not found</h1> } /> */}
     </Switch>
     </div>;

    if(props.token || adminToken) { 
        return (
            adminRoutes = <div>
                <View email={adminEmail} id={adminId} adminLogout={adminLogoutHandler}/>
                <Switch>
                    <Route path="/admin/users" exact component={Users} />
                    <Route path="/admin/orders" exact component={Orders} />
                    {/* <Route component={() => <h1>Page not found</h1> } /> */}
                </Switch>
            </div>
        );
    }

    return (
        <React.Fragment>
            { /* {adminToken && <View />}*/}
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
};

const mapDispatchToProps = dispatch => {
    return {
        adminDataHandler: (id, token, email) => dispatch({
            type: actionType.ADMIN_LOGIN, payload: { id, email, token }
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);