import classes from "./NavItems.module.css"
import { NavLink, useHistory } from "react-router-dom";


export const NavItems = props => {

    const history = useHistory();

    console.log(props.showMenu)

    return (
    <div>
        {/*  Desktop view size */}
        <div className={classes.MENU}>
           <div  onClick={props.setShowMenu}>MENU</div>
           {props.showMenu && <div onClick={props.setShowMenu}>CANCEL</div>}
        </div>
        <nav className={classes.nav}>
            <ul className={classes.style}>
                <li onClick={() => history.push("/shop")}>Home</li>
                <li><NavLink to="/cart/all" style={{color: "#fff", listStyle: "none"}}>
                    <div style={{display: "flex"}}>
                        <div>Cart</div>
                        {props.cartItems === 0 ? null : <div className={classes.cartItem}>{props.cartItems}</div>}
                    </div>
                </NavLink></li>
                <li onClick={() => history.push("/all/:name/order")}>Order</li>
            </ul>
        </nav>

    {/* Mobile view size below */}

        {props.showMenu && <nav className={classes.navMobile}>
            <ul className={classes.styleMobile}>
                <li onClick={() => history.push("/shop")}>Home</li>
                <li><NavLink to="/cart/all" style={{color: "#fff", listStyle: "none"}}>
                    <div style={{display: "block"}}>
                        <div>Cart</div>
                        {props.cartItems === 0 ? null : <div className={classes.cartItemMobile}>{props.cartItems}</div>}
                    </div>
                </NavLink></li>
                <li onClick={() => history.push("/all/:name/order")}>Order</li>
            </ul>
        </nav>}
    </div>
)};