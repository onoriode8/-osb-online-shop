import classes from "./NavItems.module.css"
import mylogo from "../../assests/mylogo.jpg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { connect } from "react-redux";
// import classes from "./NavItems.module.css";


const fullView = props => {
    const logoutHandler = () => {
        sessionStorage.removeItem("auth");
        props.logoutUserHandler();
    }
    return (
        <>
        <div className={classes.MENU}>
        <div style={{display: "flex"}}>
           <div onClick={props.setShowMenu}><AiOutlineMenu style={{fontSize: "1.5em", marginRight: "2em"}} /></div>
           <div><img src={mylogo} alt="" style={{width: "1.8em"}}/></div>
        </div>
         {props.showMenu && <div onClick={props.setShowMenu}><AiOutlineClose style={{fontSize: "2em"}} /></div>}
      </div>
      <nav className={classes.nav}>
          <ul className={classes.style}>
              {props.activeHome ? <li style={props.activeStyle}>Home</li> : <li onClick={props.activeHomeHandler}>Home</li>} 
              {props.activeCart ? <li style={props.activeStyle}>
                  <div style={{display: "flex"}}>
                      <div>Cart</div>
                      {props.pressingIronCartItems === 0 ? null : <div className={classes.cartItem}>{props.pressingIronCartItems}</div>}
                      {props.blenderCartItems === 0 ? null : <div className={classes.cartItem}>{props.blenderCartItems}</div>}
                      {props.bagCartItems === 0 ? null : <div className={classes.cartItem}>{props.bagCartItems}</div>}
                      {props.cartItems === 0 ? null : <div className={classes.cartItem}>{props.cartItems}</div>}
                      {props.watchCartItems === 0 ? null : <div className={classes.cartItem}>{props.watchCartItems}</div>}
                      {props.shoeCartItems === 0 ? null : <div className={classes.cartItem}>{props.shoeCartItems}</div>}
                  </div>
              </li> : <li onClick={props.activeCartHandler}>Cart</li>}
              {props.activeOrder ? <li style={props.activeStyle}>Order</li> : <li onClick={props.activeOrderHandler}>Order</li>}
              {props.token ? <li onClick={logoutHandler}>Logout</li> : <li onClick={props.activeLoginHandler}>Login</li>}  {/* add user id and token when user authenticate */}
          </ul>
      </nav>
      </>
    )
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
            {type: "LOGOUT", payload: {id: null,token: null,email: null,username: null}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(fullView);