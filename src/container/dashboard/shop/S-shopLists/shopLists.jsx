import React, { useState } from "react";
import { Link } from "react-router-dom";
import TshirtImage from "../../../../assests/t-shirt.jpg";
import watchImage from "../../../../assests/watch.jpg";
import shoeImage from "../../../../assests/shoe.jpg";
import classes from "./ShopLists.module.css";
import { connect } from "react-redux";


const ShopLists = (props) => {
    const [error, setError] = useState();
    // const [TshirtPrice, setTshirtPrice] = useState(8.50);
    // const [watchPrice, setWatchPrice] = useState(15.99);
    // const [shoePrice, setShoePrice] = useState(18.55);

    const addTshirtToCartHandler = async event => {
        event.preventDefault();
        try {
            // setTshirtPrice(8.50);
        //    const formData = new FormData();
        //    formData.append("price", bagPrice);
        //    formData.append("image", shoe);
           const response = await fetch(`${process.env.REACT_APP_AUTH} + /cart/t-shirt`, {
                // formData
                method: "POST",
                headers: { 
                    "Content-Type" : "application/json",
                    "Authorization" : "Bearer + " //Bearer + token
                },
                body: JSON.stringify({
                    TshirtPrice: props.TshirtPrice, TshirtImage 
                })
           });
           const responseData = await response.json();
           if(!response.ok) {
                throw new Error();
           }
           alert("succeeded in adding to cart", responseData);
        } catch(err) {
            setError(err.message);
        }
    };

    const addToCartHandler2 = async event => {
        event.preventDefault();
        try {
            // setWatchPrice(15.99);
            const formData = new FormData();
            formData.append("image", watchImage);
            formData.append("price", props.watchPrice);
            const response = await fetch(`${process.env.REACT_APP_AUTH} + /cart/watch`, {
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
            const response = await fetch(`${process.env.REACT_APP_AUTH} + /shoe/cart`, {
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

    return(
        <React.Fragment>
            {error ? <div>{error}</div> : null}
            <div style={{display: "flex", justifyContent: "center"}}>
                <div className={classes.card}>
                    <form onSubmit={addTshirtToCartHandler}>
                        <Link to="/shop/t-shirt/details"><img style={{width: "55%"}} src={TshirtImage} alt=""/></Link>
                        <div>${props.TshirtPrice}</div>
                        <button type="submit" style={{borderRadius: "8px",
                            background: "orange", color: "#fff"}}>ADD TO CART</button>
                    </form>
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
        TshirtPrice: state.shopListReducer.TshirtPrice,
        watchPrice: state.shopListReducer.watchPrice,
        shoePrice: state.shopListReducer.shoePrice
    }
}

export default connect(mapStateToProps)(ShopLists);