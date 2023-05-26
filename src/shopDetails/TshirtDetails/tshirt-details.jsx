import React, { useState } from "react";
import TshirtImage from "../../assests/t-shirt.jpg";
import DetailsCard from "../detailsCard/card";
import classes from "./tshirt-details.module.css";
import Button from "../../util/button/button";
import { connect } from "react-redux";
import axios from "axios";
import AddressOfCustomer from "../../container/customerUtility/addressOfCustomer/addressOfCustmer";

const TshirtDetails = props => {
    const [error, setError] = useState();

    //work on this function when nodejs backend is ready
    const addTshirtToCartHandler = async (event) => {
        event.preventDefault();
        try {
           const info = { TshirtImage: TshirtImage, TshirtPrice: props.TshirtPrice };
           const responseData = await axios.post(`${process.env.REACT_APP_AUTH} + /cart/t-shirt`, info,
             { headers: { "Content-Type" : "application/json" } }
           );
           console.log(responseData)  //continue from here and build the other rest details items and add to cart logic
        } catch(err) {
            setError(err.message);
        }
    };

    return (
    <React.Fragment> 
        {error && <p style={{textAlign: "center"}}>error occur</p>}
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <DetailsCard>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <div>
                <img className={classes.image} src={TshirtImage} alt="" />
                </div>
                <div className={classes.text}>Summer Men's Loose Short Sleeve Hawaii Beach Shirt - Grey</div>            
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <div></div>
                <label style={{fontFamily: "fantasy", marginTop: "-50px", fontSize: "2em"}}>${props.TshirtPrice}</label>
            </div>
            <form style={{textAlign: "center"}} onSubmit={addTshirtToCartHandler}>
                <Button>ADD TO CART</Button>
            </form>
        </DetailsCard>
        <div>
           <label>Choose Your Location</label>
           <AddressOfCustomer />
        </div>
        </div>
    </React.Fragment>
   );
};

const mapStateToProps = state => {
    return {
        TshirtPrice: state.shopListReducer.TshirtPrice
    }
};

export default connect(mapStateToProps)(TshirtDetails);