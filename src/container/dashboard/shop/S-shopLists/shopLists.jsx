import React from "react";
import classes from "./ShopLists.module.css";
import TshirtCartItems from "../../cart/tshirtCartItems/tshirtCartItems";
import WatchCartItems from "../../cart/AllCartDisplay/watchCartItems/watchCartItems";
import ShoeCartItems from "../../cart/AllCartDisplay/shoeCartItems/shoeCartItems";


const shopLists = (props) => {
    return(
        <React.Fragment>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div className={classes.card}>
                    <TshirtCartItems />
                </div>
                <div className={classes.card2}>
                    <WatchCartItems />
                </div>
                <div className={classes.card3}>
                    <ShoeCartItems />
                </div>
            </div>
        </React.Fragment>
    );
};

export default shopLists;