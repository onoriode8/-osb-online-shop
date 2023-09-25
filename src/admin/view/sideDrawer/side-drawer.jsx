import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import classes from "./side-drawer.module.css";
import { BsFillPeopleFill, BsFillKeyFill } from 'react-icons/bs';
import { VscListUnordered } from "react-icons/vsc";
import { GiShoppingCart } from "react-icons/gi";
import { RiLogoutCircleLine } from "react-icons/ri";

const view = ({email, id, adminLogout}) => {

    return (
    <header className={classes.header_containers}>
        <h1>Admin Dashboard</h1><hr/>
        <div className={classes.container_div}>
            <div></div>
            <li>Email: {email}</li>
            <li>Id: {id}</li>
        </div><hr />
        <nav>
            <ul className={classes.ul_container}>
                <NavLink to="/admin/users"  className={classes.ul_li}>
                    <div className={classes.div_container} >
                      <BsFillPeopleFill  className={classes.icons} />
                      <li><b>Users</b></li>
                    </div>
                </NavLink>
                <NavLink to="/admin/orders" className={classes.ul_li}>
                    <div className={classes.div_container}>
                      <VscListUnordered  className={classes.icons} />
                       <li><b>Orders</b></li>
                    </div>
                </NavLink>
                <NavLink to="" className={classes.ul_li}>
                    <div className={classes.div_container}>
                        <GiShoppingCart   className={classes.icons}/>
                        <li><b>Carts</b></li>
                    </div>
                </NavLink>
                <NavLink to="" className={classes.ul_li}>
                    <div className={classes.div_container}>
                        <BsFillKeyFill  className={classes.icons} />
                        <li><b>Status</b></li>
                    </div>
                </NavLink>
                <NavLink to="/admin/adminLogin" className={classes.ul_li} onClick={adminLogout}>
                    <div className={classes.div_container}>
                        <RiLogoutCircleLine  className={classes.icons} />
                        <li><b>Logout</b></li>
                    </div>
                </NavLink>
            </ul>        
        </nav>
        </header>
    );
};

const mapStateToProps = state => {
    return {
        // id: state.adminReducer.id,
        // token: state.adminReducer.token,
        email: state.adminReducer.email
    }
}

export default connect(mapStateToProps)(view);