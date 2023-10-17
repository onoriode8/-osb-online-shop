// import { NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux"
import { AiOutlinePoweroff } from "react-icons/ai";
// import { RiArrowDropDownLine } from "react-icons/ri";
import classes from "./NavItems.module.css"
import mylogo from "../../assests/mylogo.jpg";
import { useHistory } from "react-router-dom";

const SideView = props => {
    const history = useHistory();
    const logoutHandler = () => {
        sessionStorage.removeItem("auth");
        props.logoutUserHandler();
        history.push("/auth");
    };

    let assignClass = [classes.navMobile, classes.navMobile_close];
    if(props.showMenu) {
        return assignClass = [classes.navMobile, classes.navMobile_open];
    }
    return (
        <div>
        {props.showMenu && <nav className={classes.assignClass.join(" ")}> 
        <div><img src={mylogo} alt="" style={{width: "3em", margin: "2em 10px"}}/></div>

            <ul className={classes.styleMobile} onClick={props.setShowMenu}>
                {props.activeHome ? <li className={classes.li} 
                   style={props.activeStyle}>Home</li> : <li className={classes.li} onClick={props.activeHomeHandler}>Home</li>} 
                {/* <li onClick={() => history.push("/shop")} style={{padding: "10px"}}>Home</li> */}
                {props.activeCart ? <li className={classes.li} style={props.activeStyle}>
                    {/* <NavLink to="/cart/all" style={{color: "#fff", listStyle: "none"}}> */}
                    <div style={{display: "flex"}}>
                        <div>Cart</div>
                        {props.pressingIronCartItems === 0 ? null : <div className={classes.cartItemMobile}>{props.pressingIronCartItems}</div>}
                        {props.blenderCartItems === 0 ? null : <div className={classes.cartItemMobile}>{props.blenderCartItems}</div>}
                        {props.bagCartItems === 0 ? null : <div className={classes.cartItemMobile}>{props.bagCartItems}</div>}
                        {props.cartItems === 0 ? null : <div className={classes.cartItemMobile}>{props.cartItems}</div>}
                        {props.watchCartItems === 0 ? null : <div className={classes.cartItemMobile}>{props.watchCartItems}</div>}
                        {props.shoeCartItems === 0 ? null : <div className={classes.cartItemMobile}>{props.shoeCartItems}</div>}
                    </div>
                </li> : <li className={classes.li} onClick={props.activeCartHandler}>Cart</li>}
                {props.token && <>{props.activeOrder ? <li className={classes.li}
                   style={props.activeStyle}>Order</li> : <li className={classes.li} onClick={props.activeOrderHandler}>Order</li>}</> }
                {props.token ? null : <li className={classes.li} onClick={props.activeLoginHandler}>Login</li>}
                {/* {props.token ? <li className={classes.li} onClick={logoutHandler}>Logout</li> : null} */}
                {props.token && 
                   <div className={classes.li} style={{display: "flex"}} >
                      <li style={{ margin: "0px 0px"}}>Settings</li> 
                      {/* <li><RiArrowDropDownLine /></li> */}
                    </div>}
                    {/* {props.showDropdown &&
                      <ul>
                        <li>Account Settings</li>
                      </ul>} */}
                    <br /><br />
                {props.token &&
                   <div style={{display: "flex"}}>
                       <AiOutlinePoweroff style={{ margin: "0px 4px"}} />
                       <li onClick={logoutHandler}>Logout</li> 
                    </div>}
                {/* <li onClick={() => history.push("/all/:name/order")} style={{padding: "10px"}}>Order</li> */}
                {/*<li onClick={() => history.push("/auth")}>Login</li> {/* add user id and token when user authenticate */}
            </ul>
        </nav>}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        token: state.authReducer.token,
        email: state.authReducer.email
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logoutUserHandler: () => dispatch(
            {type: "LOGOUT", payload: {
                id: null,token: null,email: null,username: null, image: null
            }})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideView); 