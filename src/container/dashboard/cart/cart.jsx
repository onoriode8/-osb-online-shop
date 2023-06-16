import React, { useState, useEffect } from "react";
import Tshirt from "./AllCartDisplay/tshirt/tshirt";

// cart function to display all cart the user Added.

const DisplayAllCart = () => {
    const [cartData, setCartData] = useState([])

    // fetch all tshirt cart user added to localStorage 
    useEffect(() => {
        const parseData = JSON.parse(localStorage.getItem("cartItems"));
        if(!parseData) {
            return;
        }
        setCartData(parseData);
    }, []);
    // get all other items from localstorage and map through them one after the other.
    return (
        <React.Fragment>
            <Tshirt cartData={cartData} />
        </React.Fragment>
    );
};

export default DisplayAllCart;