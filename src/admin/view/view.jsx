import { NavLink } from "react-router-dom";
import classes from "./view.module.css";
import { BsFillPeopleFill, BsFillKeyFill } from 'react-icons/bs';
import { VscListUnordered } from "react-icons/vsc";
import { GiShoppingCart } from "react-icons/gi"

const view = () => {
    return (
    <header className={classes.header_container}>
        <h1>Admin Dashboard</h1>
        {/* <hr /> */}
        <nav>
            <ul className={classes.ul_container}>
                <NavLink to="/admin/users" className={classes.ul_li}>
                    <div className={classes.div_container}>
                      <BsFillPeopleFill className={classes.icons} />
                      <li><b>Users</b></li>
                    </div>
                </NavLink>
                <NavLink to="/admin/orders" className={classes.ul_li}>
                    <div className={classes.div_container}>
                      <VscListUnordered className={classes.icons} />
                       <li><b>Orders</b></li>
                    </div>
                </NavLink>
                <NavLink to="" className={classes.ul_li}>
                    <div className={classes.div_container}>
                        <GiShoppingCart className={classes.icons} />
                        <li><b>Carts</b></li>
                    </div>
                </NavLink>
                <NavLink to="" className={classes.ul_li}>
                    <div className={classes.div_container}>
                        <BsFillKeyFill className={classes.icons} />
                        <li><b>Status</b></li>
                    </div>
                </NavLink>
                <li>admin username</li> { /* admin username to be displayed here*/}
            </ul>        
        </nav>
        </header>
    );
};

export default view;