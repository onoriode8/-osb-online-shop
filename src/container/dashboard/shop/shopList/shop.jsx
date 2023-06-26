import React from "react";
import classes from "./shop.module.css";
// import { connect } from "react-redux";
import BagCartItems from "../../cart/AllCartDisplay/bag/bagCartItems/bagCartItems";
import PressingIronCartItems from "../../cart/AllCartDisplay/pressingIron/pressingIronCartItems/pressingIronCartItems";
import BlenderCartItems from "../../cart/AllCartDisplay/blender/blenderCartItems/blenderCartItems";

const shop = props => {

    return(
        <React.Fragment>
            {/* {error ? <div>{error}</div> : null} */}
            <div style={{display: "flex", justifyContent: "center"}}>
                <div className={classes.card}>
                    <BagCartItems />
                </div>
                <div className={classes.card2}>
                    <PressingIronCartItems />
                    {/* <form onSubmit={addWatchToCartHandler}>
                        <img style={{width: "55%"}} src={watch} alt=""/>
                        <div>${props.watchPrice}</div>
                        <button type="submit" style={{borderRadius: "8px",
                          background: "orange", color: "#fff"}}>ADD TO CART</button>
                    </form> */}
                </div>
                <div className={classes.card3}>
                    <BlenderCartItems />
                    {/* <form onSubmit={addShoeToCartHandler}>
                        <img style={{width: "55%"}} src={shoe} alt=""/>
                        <div>${props.shoePrice}</div>
                        <button type="submit" style={{borderRadius: "8px",
                        background: "orange", color: "#fff"}}>ADD TO CART</button>
                    </form> */}
                </div>
            </div><br />
        </React.Fragment>
    );
};

// const mapStateToProps = state => {
//     return {
//         bagPrice: state.shopReducer.bagPrice,
//         watchPrice: state.shopReducer.watchPrice,
//         shoePrice: state.shopReducer.shoePrice
//     }
// }


export default shop;