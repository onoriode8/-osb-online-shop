import React, { useState } from "react";
import bagImage from "../../../../assests/bag.jpg";
import watch from "../../../../assests/watch.jpg";
import shoe from "../../../../assests/shoe.jpg";
import classes from "./shop.module.css";
import { connect } from "react-redux";

const Shop = props => {
    const [error, setError] = useState();
    // const [bagPrice, setBagPrice] = useState(10.22);
    // const [watchPrice, setWatchPrice] = useState(15.99);
    // const [shoePrice, setShoePrice] = useState(18.55);

    const addBagToCartHandler = async event => {
        event.preventDefault();
        try {
            // setBagPrice(10.00);
        //    const formData = new FormData();
        //    formData.append("price", bagPrice);
        //    formData.append("image", shoe);
           const response = await fetch(`${process.env.REACT_APP_AUTH} + /cart/bag`, {
                // formData
                method: "POST",
                headers: { 
                    "Content-Type" : "application/json",
                    "Authorization" : "Bearer + " //Bearer + token
                },
                body: JSON.stringify({
                    bagPrice: props.bagPrice, bagImage
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

    const addWatchToCartHandler = async event => {
        event.preventDefault();
        try {
            // setWatchPrice(15.99);
            const formData = new FormData();
            formData.append("image", watch);
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

    const addShoeToCartHandler = async e => {
        e.preventDefault();
        try {
            // setShoePrice(18.50);
            const formData = new FormData();
            formData.append("image", shoe);
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
                    <form onSubmit={addBagToCartHandler}>
                        <img style={{width: "55%"}} src={bagImage} alt=""/>
                        <div>${props.bagPrice}</div>
                        <button type="submit" style={{borderRadius: "8px",
                            background: "orange", color: "#fff"}}>ADD TO CART</button>
                    </form>
                </div>
                <div className={classes.card2}>
                    <form onSubmit={addWatchToCartHandler}>
                        <img style={{width: "55%"}} src={watch} alt=""/>
                        <div>${props.watchPrice}</div>
                        <button type="submit" style={{borderRadius: "8px",
                          background: "orange", color: "#fff"}}>ADD TO CART</button>
                    </form>
                </div>
                <div className={classes.card3}>
                    <form onSubmit={addShoeToCartHandler}>
                        <img style={{width: "55%"}} src={shoe} alt=""/>
                        <div>${props.shoePrice}</div>
                        <button type="submit" style={{borderRadius: "8px",
                        background: "orange", color: "#fff"}}>ADD TO CART</button>
                    </form>
                </div>
            </div><br />
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        bagPrice: state.shopReducer.bagPrice,
        watchPrice: state.shopReducer.watchPrice,
        shoePrice: state.shopReducer.shoePrice
    }
}


export default connect(mapStateToProps)(Shop);