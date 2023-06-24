import classes from "./NavItems.module.css"
import { NavLink, useHistory } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


export const NavItems = props => {
    const history = useHistory();
    return (
    <div>
        {/*  Desktop view size */}
        <div className={classes.MENU}>
           <div onClick={props.setShowMenu}><AiOutlineMenu style={{fontSize: "1.3em"}} /></div>
           {props.showMenu && <div onClick={props.setShowMenu}><AiOutlineClose style={{fontSize: "2em"}} /></div>}
        </div>
        <nav className={classes.nav}>
            <ul className={classes.style}>
                <li onClick={() => history.push("/shop")}>Home</li>
                <li><NavLink to="/cart/all" style={{color: "#fff", listStyle: "none"}}>
                    <div style={{display: "flex"}}>
                        <div>Cart</div>
                        {props.bagCartItems === 0 ? null : <div className={classes.cartItemMobile}>{props.bagCartItems}</div>}
                        {props.cartItems === 0 ? null : <div className={classes.cartItem}>{props.cartItems}</div>}
                        {props.watchCartItems === 0 ? null : <div className={classes.cartItem}>{props.watchCartItems}</div>}
                        {props.shoeCartItems === 0 ? null : <div className={classes.cartItemMobile}>{props.shoeCartItems}</div>}
                    </div>
                </NavLink></li>
                <li onClick={() => history.push("/all/:name/order")}>Order</li>
            </ul>
        </nav>

    {/* Mobile view size below */}
        {props.showMenu && <nav className={classes.navMobile}> 
            <ul className={classes.styleMobile} onClick={props.setShowMenu}>
                <li onClick={() => history.push("/shop")} style={{padding: "10px"}}>Home</li>
                <li><NavLink to="/cart/all" style={{color: "#fff", listStyle: "none"}}>
                    <div style={{display: "flex"}}>
                        <div>Cart</div>
                        {props.bagCartItems === 0 ? null : <div className={classes.cartItemMobile}>{props.bagCartItems}</div>}
                        {props.cartItems === 0 ? null : <div className={classes.cartItemMobile}>{props.cartItems}</div>}
                        {props.watchCartItems === 0 ? null : <div className={classes.cartItemMobile}>{props.watchCartItems}</div>}
                        {props.shoeCartItems === 0 ? null : <div className={classes.cartItemMobile}>{props.shoeCartItems}</div>}
                    </div>
                </NavLink></li>
                <li onClick={() => history.push("/all/:name/order")} style={{padding: "10px"}}>Order</li>
            </ul>
            {/* <button onClick={() => localStorage.removeItem("shoeCartItems")}>remove shoe Cart</button> */}

        </nav>}
    </div>
)};