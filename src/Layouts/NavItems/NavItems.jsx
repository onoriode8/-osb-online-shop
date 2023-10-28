import { useState } from "react";
// import classes from "./NavItems.module.css"
import { useHistory } from "react-router-dom";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import mylogo from "../../assests/mylogo.jpg";
import SideView from "./sideView";
import FullView from "./fullView";
import { connect } from "react-redux"; // check later

const activeStyle = {
    color: "#fff",
    padding: "3px 6px",
    background: "#60f384"
}

const NavItems = props => {
    const [activeHome, setActiveHome] = useState(false);
    const [activeCart, setActiveCart] = useState(false);
    const [activeOrder, setActiveOrder] = useState(false);
    const [activeLogin, setActiveLogin] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const history = useHistory();
    const activeCartHandler = () => {
        setActiveHome(false);
        setActiveLogin(false);
        setActiveOrder(false);
        setActiveCart(true);
        history.push("/cart/all");
    };
    const activeOrderHandler = () => {
        setActiveHome(false);
        setActiveLogin(false);
        setActiveCart(false);
        setActiveOrder(true);
        history.push(`/all/${props.username}/order`); //before  "/all/:name/order"
    };
    const activeLoginHandler = () => {
        setActiveHome(false);
        setActiveOrder(false);
        setActiveCart(false);
        setActiveLogin(true);
        history.push("/auth");
    };
    const activeHomeHandler = () => {
        setActiveLogin(false);
        setActiveOrder(false);
        setActiveCart(false);
        setActiveHome(true) 
        history.push("/")
    };
    return (
    <div>
        {/*  Desktop view size */}
       <FullView 
       showMenu={props.showMenu} setShowMenu={props.setShowMenu}
       pressingIronCartItems={props.pressingIronCartItems}
       blenderCartItems={props.blenderCartItems}
       bagCartItems={props.bagCartItems}
       cartItems={props.cartItems}
       watchCartItems={props.watchCartItems}
       shoeCartItems={props.shoeCartItems} activeStyle={activeStyle}
       activeHomeHandler={activeHomeHandler} activeCartHandler={activeCartHandler}
       activeLoginHandler={activeLoginHandler} activeOrderHandler={activeOrderHandler}
       activeCart={activeCart} activeHome={activeHome} activeLogin={activeLogin} activeOrder={activeOrder}
       showDropdown={showDropdown} setShowDropdown={() =>setShowDropdown(prevState => !prevState)}
       showProfile={showProfile} setShowProfile={() => setShowProfile(prevState => !prevState)}
       />

    {/* Mobile view size below */}
        <SideView showMenu={props.showMenu} setShowMenu={props.setShowMenu}
          pressingIronCartItems={props.pressingIronCartItems}
          blenderCartItems={props.blenderCartItems}
          bagCartItems={props.bagCartItems}
          cartItems={props.cartItems}
          watchCartItems={props.watchCartItems}
          shoeCartItems={props.shoeCartItems} activeStyle={activeStyle}
          activeHomeHandler={activeHomeHandler} activeCartHandler={activeCartHandler}
          activeLoginHandler={activeLoginHandler} activeOrderHandler={activeOrderHandler}
          activeCart={activeCart} activeHome={activeHome} activeLogin={activeLogin} activeOrder={activeOrder}
          showDropdown={showDropdown} setShowDropdown={() =>setShowDropdown(prevState => !prevState)}
        />
    </div>
)};

const mapStateToProps = state => {
    return {
        username: state.authReducer.username
        // 
    }
} //check later as well as above. 


export default connect(mapStateToProps)(NavItems);