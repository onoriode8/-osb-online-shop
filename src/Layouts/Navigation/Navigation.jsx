import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavItems } from "../NavItems/NavItems";
import bagImage from "../../assests/bag.jpg";
import TshirtImage from "../../assests/t-shirt.jpg";
import WatchImage from "../../assests/watch.jpg";
import shoeImage from "../../assests/shoe.jpg";

const Navigation = (props) => {
    const [bagCartData, setBagCartData] = useState([]);
    const [cartData, setCartData] = useState([]);
    const [watchCartData, setWatchCartData] = useState([]);
    const [shoeCartData, setShoeCartData] = useState([]);
    const [showMenu, setShowMenu] = useState(false);

    // store tshirt quantity in localStorage below
    useEffect(() => {
        const parseData = JSON.parse(localStorage.getItem("cartItems"));
        if(parseData) {
            return;
        } 
        const cartItems = [];
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }, []);

    useEffect(() => {
        if(props.tshirtCartQuanty === 0) return;
        const items = localStorage.getItem("cartItems");
        const parseItems = JSON.parse(items);
        const cartData = { TshirtPrice: props.TshirtPrice, TshirtImage, quantity: props.tshirtCartQuanty }
        const finalItem = JSON.stringify([...parseItems, cartData]);
        localStorage.setItem("cartItems", finalItem);
        const data = JSON.parse(localStorage.getItem("cartItems"));
        // console.log(data)
        if(!data) {
            return
        };
        setCartData(data);
    }, [props.tshirtCartQuanty, props.TshirtPrice]);

    useEffect(() => {
        if(cartData.length === 0) return;
        localStorage.setItem("cartItems", JSON.stringify(cartData));
      }, [cartData]);

    // store watch quantity in localStorage below
    useEffect(() => {
        const parseData = JSON.parse(localStorage.getItem("watchCartItems"));
        if(parseData) {
            return;
        } 
        const watchCartData = [];
        localStorage.setItem("watchCartItems", JSON.stringify(watchCartData));
      }, []);

    useEffect(() => {
        if(props.watchCartQuanty === 0) return;
        const items = localStorage.getItem("watchCartItems");
        const parseItems = JSON.parse(items);
        const watchCartData = { WatchPrice: props.WatchPrice, WatchImage, quantity: props.watchCartQuanty }
        const finalItem = JSON.stringify([...parseItems, watchCartData]);
        localStorage.setItem("watchCartItems", finalItem);
        const data = JSON.parse(localStorage.getItem("watchCartItems"));
        console.log(data)
        if(!data) {
            return
        };
        setWatchCartData(data);
    }, [props.watchCartQuanty, props.WatchPrice]);

    useEffect(() => {
        if(watchCartData.length === 0) return;
        localStorage.setItem("watchCartItems", JSON.stringify(watchCartData));
      }, [watchCartData]);

    // store shoe quantity in localStorage below
      useEffect(() => {
        const parseData = JSON.parse(localStorage.getItem("shoeCartItems"));
        if(parseData) {
            return;
        } 
        const shoeCartData = [];
        localStorage.setItem("shoeCartItems", JSON.stringify(shoeCartData));
      }, []);

    useEffect(() => {
        if(props.shoeCartQuanty === 0) return;
        const items = localStorage.getItem("shoeCartItems");
        const parseItems = JSON.parse(items);
        const shoeCartData = { shoePrice: props.shoePrice, shoeImage, quantity: props.shoeCartQuanty }
        const finalItem = JSON.stringify([...parseItems, shoeCartData]);
        localStorage.setItem("shoeCartItems", finalItem);
        const data = JSON.parse(localStorage.getItem("shoeCartItems"));
        console.log(data)
        if(!data) {
            return
        };
        setShoeCartData(data);
    }, [props.shoeCartQuanty, props.shoePrice]);

    useEffect(() => {
        if(shoeCartData.length === 0) return;
        localStorage.setItem("shoeCartItems", JSON.stringify(shoeCartData));
      }, [shoeCartData]);

    // store bag quantity in localStorage below
    useEffect(() => {
        const parseData = JSON.parse(localStorage.getItem("bagCartItems"));
        if(parseData) {
            return;
        } 
        const bagCartData = [];
        localStorage.setItem("bagCartItems", JSON.stringify(bagCartData));
      }, []);

    useEffect(() => {
        if(props.bagCartQuanty === 0) return;
        const items = localStorage.getItem("bagCartItems");
        const parseItems = JSON.parse(items);
        const bagCartData = { bagPrice: props.bagPrice, bagImage, quantity: props.bagCartQuanty }
        const finalItem = JSON.stringify([...parseItems, bagCartData]);
        localStorage.setItem("bagCartItems", finalItem);
        const data = JSON.parse(localStorage.getItem("bagCartItems"));
        // console.log(data)
        if(!data) {
            return
        };
        setBagCartData(data);
    }, [props.bagCartQuanty, props.bagPrice]);

    useEffect(() => {
        if(bagCartData.length === 0) return;
        localStorage.setItem("bagCartItems", JSON.stringify(bagCartData));
      }, [bagCartData]);

      // useEffect(() => {
        //store all other quantity in localStorage as the logic above for tshirt cart one after the other
    // })

    return (
        <React.Fragment>
            <div>
               <NavItems 
                  cartItems={cartData.length} 
                  watchCartItems={watchCartData.length}
                  shoeCartItems={shoeCartData.length}
                  bagCartItems={bagCartData.length}
                  showMenu={showMenu} setShowMenu={() => setShowMenu(!showMenu)}
                  />
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        bagCartQuanty: state.shopReducer.bagData.bagCartQuanty,
        bagPrice: state.shopReducer.bagData.bagPrice,

        //for shopListReducer reducer
        tshirtCartQuanty: state.shopListReducer.tshirtData.tshirtCartQuanty,
        TshirtPrice: state.shopListReducer.tshirtData.TshirtPrice,
        WatchPrice: state.shopListReducer.watchData.watchPrice,
        watchCartQuanty: state.shopListReducer.watchData.watchCartQuanty,
        shoePrice: state.shopListReducer.shoeData.shoePrice,
        shoeCartQuanty: state.shopListReducer.shoeData.shoeCartQuanty
    }
}

export default connect(mapStateToProps)(Navigation);