import React, { useState } from "react";
import { connect } from "react-redux";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import TshirtImage from "../../../../assests/t-shirt.jpg";
import watchImage from "../../../../assests/watch.jpg";
import shoeImage from "../../../../assests/shoe.jpg";
import classes from "./ShopLists.module.css";
// import { Button } from "../../../../util/button/cartButton"; 
import TshirtCartItems from "../../cart/tshirtCartItems/tshirtCartItems";


const ShopLists = (props) => {
    const [error, setError] = useState();

    // const [watchPrice, setWatchPrice] = useState(15.99);
    // const [shoePrice, setShoePrice] = useState(18.55);

   

    const addToCartHandler2 = async event => {
        event.preventDefault();
        try {
            // setWatchPrice(15.99);
            const formData = new FormData();
            formData.append("image", watchImage);
            formData.append("price", props.watchPrice);
            const response = await fetch(`${process.env.REACT_APP_AUTH} + /cart`, {
                method: "POST",
                formData
            });
            const responseData = await response.json();
            if(!response.ok) {
                throw new Error();
           }
           alert("succeeded in adding to cart", responseData);
        }catch(err) {
            setError(err.message);
        }
    };

    const addToCartHandler3 = async e => {
        e.preventDefault();
        try {
            // setShoePrice(18.50);
            const formData = new FormData();
            formData.append("image", shoeImage);
            formData.append("price", props.shoePrice);
            const response = await fetch(`${process.env.REACT_APP_AUTH} + /cart`, {
                method: "POST",
                formData
            });
            const responseData = await response.json();
            if(!response.ok) {
                throw new Error();
           }
           alert("succeeded in adding to cart", responseData);
        }catch(err) {
            setError(err.message);
        }
    }

    //pick image from internet and display it on the img tags

    // console.log(props.tshirtCartQuanty);

    //testing will be deleted later and the button to perform action to remove item

    //continue working on this component and Navigation.jsx component to fully add the functionality
    //of adding user cart to localStorage multiple times
    // const removeCartItem = () => {
    //     localStorage.removeItem("cartItems")
    // }

    return(
        <React.Fragment>
            {error ? <div>{error}</div> : null}
            <div style={{display: "flex", justifyContent: "center"}}>
                <div className={classes.card}>
                    <TshirtCartItems />
                    {/* <div> */}
                        {/* <Link to="/shop/t-shirt/details"><img style={{width: "55%"}} src={TshirtImage} alt=""/></Link> */}
                        {/* <div>${props.TshirtPrice}</div> */}
                            {/* {props.tshirtCartQuanty === 0 ?  */}
                                {/* <button type="submit" style={{borderRadius: "8px", */}
                                      {/* background: "orange", color: "#fff"}} onClick={AddTshirtToCartHandler}>ADD TO CART</button> : */}
                                   {/* <div style={{display: "flex", justifyContent: "space-evenly"}}> */}
                                       {/* <Button clicked={SubstractCartHandler}>-</Button> */}
                                       {/* <button onClick={removeCartItem}>Remove Items</button> */}
                                           {/* {props.tshirtCartQuanty > 0 ? <label>{props.tshirtCartQuanty}</label> : null } */}
                                              {/* {props.tshirtCartQuanty === 3 ? <Button disabled>+</Button>  */}
                                                {/* :  */}
                                                {/* <Button clicked={AddTshirtToCartHandler}>+</Button>} */}
                        {/* </div>} */}
                    {/* </div> */}
                </div>
                <div className={classes.card2}>
                    <form onSubmit={addToCartHandler2}>
                        <img style={{width: "55%"}} src={watchImage} alt=""/>
                        <div>${props.watchPrice}</div>
                        <button type="submit" style={{borderRadius: "8px",
                          background: "orange", color: "#fff"}}>ADD TO CART</button>
                    </form>
                </div>
                <div className={classes.card3}>
                    <form onSubmit={addToCartHandler3}>
                        <img style={{width: "55%"}} src={shoeImage} alt=""/>
                        <div>${props.shoePrice}</div>
                        <button type="submit" style={{borderRadius: "8px",
                        background: "orange", color: "#fff"}}>ADD TO CART</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        // TshirtPrice: state.shopListReducer.tshirtData.TshirtPrice,
        // tshirtCartQuanty: state.shopListReducer.tshirtData.tshirtCartQuanty,
        watchPrice: state.shopListReducer.watchPrice,
        shoePrice: state.shopListReducer.shoePrice
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch({ type: "INCREMENT", payload: 1 }),
//         decrement: () => dispatch({ type: "DECREMENT", payload: 1 })
//     }
// }

export default connect(mapStateToProps)(ShopLists);