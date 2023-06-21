import React from "react";
import Shop  from "../dashboard/shop/shopList/shop";
import ShopLists  from "../dashboard/shop/S-shopLists/shopLists";

export const Home = () => {
    return (
        <React.Fragment>
            <div style={{marginTop: "5em"}}>
                <Shop />
                <ShopLists />
            </div>
        </React.Fragment>
    );
};

