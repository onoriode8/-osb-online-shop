import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavItems } from "../NavItems/NavItems";
import TshirtImage from "../../assests/t-shirt.jpg";


const Navigation = (props) => {
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        console.log("1ST USEEFFECT");
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
        // const newItem = {quantity: props.tshirtCartQuanty}
        const cartData = { TshirtPrice: props.TshirtPrice, TshirtImage, quantity: props.tshirtCartQuanty }
        const finalItem = JSON.stringify([...parseItems, cartData]);
        localStorage.setItem("cartItems", finalItem);
        // const i = parseItems.push({newItem});
        // console.log("items", i);
        const data = JSON.parse(localStorage.getItem("cartItems"));
        console.log(data)
        if(!data) {
            return
        };
        setCartData(data);
    }, [props.tshirtCartQuanty, props.TshirtPrice]);

    useEffect(() => {
        console.log("3RD USEEFFECT")
        if(cartData.length === 0) return;
        localStorage.setItem("cartItems", JSON.stringify(cartData));
        // if(props.tshirtCartQuanty === 0) {

        // }
        console.log("last line", cartData);
      }, [cartData]);


    // useEffect(() => {
        //store all other quantity in localStorage as the logic above for tshirt cart one after the other
    // })


    return (
        <React.Fragment>
            <div>
               <NavItems cartItems={cartData.length}/>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        tshirtCartQuanty: state.shopListReducer.tshirtData.tshirtCartQuanty,
        TshirtPrice: state.shopListReducer.tshirtData.TshirtPrice,
        // pass other products cart quatity here and display them all in the navitem
    }
}

export default connect(mapStateToProps)(Navigation);