import classes from "./NavItems.module.css"
import mylogo from "../../assests/mylogo.jpg";
import { AiOutlineMenu, AiOutlineClose, AiOutlinePoweroff } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../util/card/card";
import Profile from "../../container/profile/profile";

const settingsStyles = {
    color: "#fff",
    padding: "12px 8px",
    // margin: "12px 0px",
    background: "grey",
    borderRadius: "1em",
    position: "fixed",
    zIndex: "100",
    listStyle: "none"
};


const fullView = props => {
    const logoutHandler = () => {
        sessionStorage.removeItem("auth");
        props.logoutUserHandler();
    };

    console.log(props.showProfile); // work on here in getting the showprofile passed as props and add a submit handler
    console.log(props.setShowProfile)

    return (
        <>
        {props.showProfile === undefined && <Card>
            <Profile />
        </Card>}
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
              {props.token ? <>{props.activeOrder ? <li style={props.activeStyle}>Order</li> : <li onClick={props.activeOrderHandler}>Order</li>}</> : null }
              {props.token && <li onClick={props.setShowDropdown} >Settings
                {props.showDropdown && <ul style={settingsStyles}>
                    {props.image.length === 0 ? <li title="Add Avatar" onClick={props.setShowProfile} style={{textAlign: "center", fontSize: "3em"}}><RxAvatar /></li>
                     : <li style={{borderRadius:"4em", textAlign: "center", fontSize: "3em"}}>{props.image}</li>}
                    <li>{props.email}</li><hr /><br />
                    <Link to={`/${props.username}/account-settings/`}
                      style={{color: "#fff", textDecoration: "none"}} 
                        title="account settings"
                       ><li>Account Settings</li></Link><br />
                    <div title="Logout" style={{display: "flex"}}>
                       <AiOutlinePoweroff style={{ margin: "0px 4px"}}/>
                       <li onClick={logoutHandler}>Logout</li>
                    </div>
                </ul>}
              </li>}
              {props.token === null && <li onClick={props.activeLoginHandler}>Login</li>}  {/* add user id and token when user authenticate */}
          </ul>
      </nav>
      </>
    );
};

const mapStateToProps = state => {
    return {
        token: state.authReducer.token,
        email: state.authReducer.email,
        username: state.authReducer.username,
        image: state.authReducer.image
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUserHandler: () => dispatch(
            {type: "LOGOUT", payload: {id: null,token: null,email: null,username: null,image: null}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(fullView);