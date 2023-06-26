import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Bag from "./AllCartDisplay/bag/bag";
import Tshirt from "./AllCartDisplay/tshirt/tshirt";
import Watch from "./AllCartDisplay/watch/watch";
import Shoe from "./AllCartDisplay/shoe/shoe";
import PressingIron from "./AllCartDisplay/pressingIron/pressingIron";
import Blender from "./AllCartDisplay/blender/blender";

// cart function to display all cart the user Added.

const DisplayAllCart = () => {
    const [cartData, setCartData] = useState([]);
    const [watchCartData, setWatchCartData] = useState([]);
    const [shoeCartData, setShoeCartData] = useState([]);
    const [bagCartData, setBagCartData] = useState([]);
    const [pressingIronCartData, setPressingIronCartData] = useState([]);
    const [blenderCartData, setBlenderCartData] = useState([]);

    const history = useHistory();

    // fetch all tshirt cart user added to localStorage 
    useEffect(() => {
        const parseData = JSON.parse(localStorage.getItem("cartItems"));
        if(!parseData) {
            return;
        }
        setCartData(parseData);
    }, []);

    useEffect(() => {
        const parseData = JSON.parse(localStorage.getItem("watchCartItems"));
        if(!parseData) {
            return;
        }
        setWatchCartData(parseData);
    }, []);

    useEffect(() => {
        const parseData = JSON.parse(localStorage.getItem("shoeCartItems"));
        if(!parseData) {
            return;
        }
        setShoeCartData(parseData);
    }, []);

    useEffect(() => {
        const parseData = JSON.parse(localStorage.getItem("bagCartItems"));
        if(!parseData) {
            return;
        }
        setBagCartData(parseData);
    }, []);

    useEffect(() => {
        const parseData = JSON.parse(localStorage.getItem("pressingIronCartItems"));
        if(!parseData) {
            return;
        }
        setPressingIronCartData(parseData);
    }, []);
    // get all other items from localstorage and map through them one after the other.
    useEffect(() => {
        const parseData = JSON.parse(localStorage.getItem("blenderCartItems"));
        if(!parseData) {
            return;
        }
        setBlenderCartData(parseData);
    }, []);
    return (
        <React.Fragment>
            <div style={{marginTop: "4em", fontSize: "1.1em"}}>
                <AiOutlineArrowLeft onClick={() => history.push("/shop")} />
            </div>
            <Bag cartData={bagCartData} />
            <Tshirt cartData={cartData} />
            <Watch cartData={watchCartData} />
            <Shoe cartData={shoeCartData} />
            <PressingIron cartData={pressingIronCartData}/>
            <Blender cartData={blenderCartData} />
        </React.Fragment>
    );
};

export default DisplayAllCart;