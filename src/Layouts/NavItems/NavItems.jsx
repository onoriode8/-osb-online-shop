import classes from "./NavItems.module.css"
import { NavLink, useHistory } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import mylogo from "../../assests/mylogo.jpg";


export const NavItems = props => {
    const history = useHistory();
    return (
    <div>
        {/*  Desktop view size */}
        <div className={classes.MENU}>
          <div style={{display: "flex"}}>
             <div onClick={props.setShowMenu}><AiOutlineMenu style={{fontSize: "1.5em", marginRight: "2em"}} /></div>
             <div><img src={mylogo} alt="" style={{width: "1.8em"}}/></div>
          </div>
           {props.showMenu && <div onClick={props.setShowMenu}><AiOutlineClose style={{fontSize: "2em"}} /></div>}
        </div>
        <nav className={classes.nav}>
            <ul className={classes.style}>
                <li onClick={() => history.push("/shop")}>Home</li>
                <li><NavLink to="/cart/all" style={{color: "#fff", listStyle: "none"}}>
                    <div style={{display: "flex"}}>
                        <div>Cart</div>
                        {props.pressingIronCartItems === 0 ? null : <div className={classes.cartItem}>{props.pressingIronCartItems}</div>}
                        {props.blenderCartItems === 0 ? null : <div className={classes.cartItem}>{props.blenderCartItems}</div>}
                        {props.bagCartItems === 0 ? null : <div className={classes.cartItem}>{props.bagCartItems}</div>}
                        {props.cartItems === 0 ? null : <div className={classes.cartItem}>{props.cartItems}</div>}
                        {props.watchCartItems === 0 ? null : <div className={classes.cartItem}>{props.watchCartItems}</div>}
                        {props.shoeCartItems === 0 ? null : <div className={classes.cartItem}>{props.shoeCartItems}</div>}
                    </div>
                </NavLink></li>
                <li onClick={() => history.push("/all/:name/order")}>Order</li>
            </ul>
        </nav>

    {/* Mobile view size below */}
        {props.showMenu && <nav className={classes.navMobile}> 
        <div><img src={mylogo} alt="" style={{width: "3em", margin: "2em 10px"}}/></div>

            <ul className={classes.styleMobile} onClick={props.setShowMenu}>
                <li onClick={() => history.push("/shop")} style={{padding: "10px"}}>Home</li>
                <li><NavLink to="/cart/all" style={{color: "#fff", listStyle: "none"}}>
                    <div style={{display: "flex"}}>
                        <div>Cart</div>
                        {props.pressingIronCartItems === 0 ? null : <div className={classes.cartItemMobile}>{props.pressingIronCartItems}</div>}
                        {props.blenderCartItems === 0 ? null : <div className={classes.cartItemMobile}>{props.blenderCartItems}</div>}
                        {props.bagCartItems === 0 ? null : <div className={classes.cartItemMobile}>{props.bagCartItems}</div>}
                        {props.cartItems === 0 ? null : <div className={classes.cartItemMobile}>{props.cartItems}</div>}
                        {props.watchCartItems === 0 ? null : <div className={classes.cartItemMobile}>{props.watchCartItems}</div>}
                        {props.shoeCartItems === 0 ? null : <div className={classes.cartItemMobile}>{props.shoeCartItems}</div>}
                    </div>
                </NavLink></li>
                <li onClick={() => history.push("/all/:name/order")} style={{padding: "10px"}}>Order</li>
            </ul>
        </nav>}
    </div>
)};