import React from "react";
import Shop  from "../dashboard/shop/shopList/shop";
import ShopLists  from "../dashboard/shop/S-shopLists/shopLists";

const Home = () => {
    return (
        <React.Fragment>
            <div style={{marginTop: "4em"}}>
                <Shop />
                <ShopLists />  {/* working on this component  */}
            </div>
        </React.Fragment>
    );
};

export default Home;

