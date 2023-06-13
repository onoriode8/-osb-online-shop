import React, { useState, useEffect, useCallback } from "react";
import TshirtImage from "../../assests/t-shirt.jpg";
import DetailsCard from "../detailsCard/card";
import classes from "./tshirt-details.module.css";
import Buttons from "../../util/button/button";
import { connect } from "react-redux";
import AddressOfCustomer from "../../container/customerUtility/addressOfCustomer/addressOfCustmer";
import { AlarmModel } from "../../container/dashboard/shop/AlarmModel/alarmModel";
import { Button } from "../../util/button/cartButton";

const TshirtDetails = props => {
    const [itemRemoveAlarm, setItemRemoveAlarm] = useState(false);
    const [itemAddAlarm, setItemAddAlarm] = useState(false);

    useEffect(() => {
        //add the tshirtCartQuanty, tshirtImage and tshirtPrice to localStorage
        if(props.tshirtCartQuanty === 1 && props.TshirtPrice === 8.50) {
            const data = { TshirtPrice: props.TshirtPrice, 
                TshirtImage, quantity: props.tshirtCartQuanty, location: props.location }
            localStorage.setItem("cartItems", JSON.stringify([data]));
        }
        if(props.tshirtCartQuanty > 1) {
            JSON.parse(localStorage.getItem("cartItems"));
        }
    }, [props.tshirtCartQuanty, props.TshirtPrice, props.location]);

    const SubstractCartHandler = useCallback(() => {
        props.decrement(); 
            const parseData = JSON.parse(localStorage.getItem("cartItems"))
            const data = parseData.splice(0, 1);
            setItemRemoveAlarm(true);
            setTimeout(() => {
                setItemRemoveAlarm(false);
            }, 1500);
            if(props.tshirtCartQuanty === 0 || data.length === 1) {
                parseData.splice(0, 1);
                localStorage.setItem("cartItems", JSON.stringify([]));
            }
    }, [props]);

    const AddTshirtToCartHandler = useCallback(() => {
        props.increment();
        setItemAddAlarm(true);
            setTimeout(() => {
                setItemAddAlarm(false);
            }, 1500);
       
    }, [props]);

    return (
    <React.Fragment> 
        <AlarmModel itemRemoveAlarm={itemRemoveAlarm} itemAddAlarm={itemAddAlarm} />
        <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
        <DetailsCard>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <div>
                <img className={classes.image} src={TshirtImage} alt="" />
                </div>
                <div className={classes.text}>Summer Men's Loose Short Sleeve Hawaii Beach Shirt - Grey</div>            
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <div></div>
                <label className={classes.tshirtPrice}>${props.TshirtPrice}</label>
            </div>
            {props.tshirtCartQuanty === 0 ? 
            <div style={{textAlign: "center"}}>
                {props.location === null ? <Buttons disabled={true}>ADD TO CART</Buttons> :
                   <Buttons click={AddTshirtToCartHandler}>ADD TO CART</Buttons>}
            </div>
            :<div style={{display: "flex", justifyContent: "space-evenly"}}>
            <Button clicked={SubstractCartHandler}>-</Button>
            {props.tshirtCartQuanty > 0 ? <label>{props.tshirtCartQuanty}</label> : null }
            {props.tshirtCartQuanty === 3 ? <Button disabled>+</Button> 
            : 
            <Button clicked={AddTshirtToCartHandler}>+</Button>}
            </div>}
            {props.tshirtCartQuanty > 0 ? <label className={classes.quantyDisplay}
              >({props.tshirtCartQuanty} item(s) added)</label> : null}
        </DetailsCard>
        <div>
           <AddressOfCustomer />
        </div>
        </div>
    </React.Fragment>
   );
};

const mapStateToProps = state => {
    return {
        TshirtPrice: state.shopListReducer.tshirtData.TshirtPrice,
        tshirtCartQuanty: state.shopListReducer.tshirtData.tshirtCartQuanty,
        location: state.shopListReducer.tshirtData.location
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: "INCREMENT", payload: 1 }),
        decrement: () => dispatch({ type: "DECREMENT", payload: 1 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TshirtDetails); 