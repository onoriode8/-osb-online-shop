import classes from "./NavItems.module.css"
import { NavLink } from "react-router-dom";

export const NavItems = props => (
    <nav className={classes.nav}>
        <ul className={classes.style}>
            <li>Home</li>
            <li><NavLink to="/cart/all" style={{color: "#fff", listStyle: "none"}}>
                <div style={{display: "flex"}}>
                    <div>Cart</div>
                    {props.cartItems === 0 ? null : <div className={classes.cartItem}>{props.cartItems}</div>}
                </div>
            </NavLink></li>
            <li>Checkout</li>
        </ul>
    </nav>
);