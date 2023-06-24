import React, { useState, useEffect, useCallback } from "react";
import shoeImage from "../../assests/shoe.jpg";
import DetailsCard from "../detailsCard/card";
import classes from "./shoe-details.module.css";
import Buttons from "../../util/button/button";
import { connect } from "react-redux";
import AddressOfCustomer from "../../container/customerUtility/addressOfCustomer/addressOfCustmer";
import { AlarmModel } from "../../container/dashboard/shop/AlarmModel/alarmModel";
import { Button } from "../../util/button/cartButton";
import * as shopListActionType from "../../store/actions/shopListsAction";


const ShoeDetails = props => {
    const [itemRemoveAlarm, setItemRemoveAlarm] = useState(false);
    const [itemAddAlarm, setItemAddAlarm] = useState(false);

    useEffect(() => {
        //add the tshirtCartQuanty, tshirtImage and tshirtPrice to localStorage
        if(props.shoeCartQuanty === 1 && props.shoePrice === 8.50) {
            const data = { shoePrice: props.shoePrice, 
                shoeImage, quantity: props.shoeCartQuanty, location: props.location }
            localStorage.setItem("shoeCartItems", JSON.stringify([data]));
        }
        if(props.shoeCartQuanty > 1) {
            JSON.parse(localStorage.getItem("shoeCartItems"));
        }
    }, [props.shoeCartQuanty, props.shoePrice, props.location]);

    const SubstractCartHandler = useCallback(() => {
        props.decrement(); 
            const parseData = JSON.parse(localStorage.getItem("shoeCartItems"))
            const data = parseData.splice(0, 1);
            setItemRemoveAlarm(true);
            setTimeout(() => {
                setItemRemoveAlarm(false);
            }, 1500);
            if(props.shoeCartQuanty === 0 || data.length === 1) {
                parseData.splice(0, 1);
                localStorage.setItem("shoeCartItems", JSON.stringify([]));
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
                <img className={classes.image} src={shoeImage} alt="" />
                </div>
                <div className={classes.text}>Smart shoe Compatible - Black and white</div>            
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <div></div>
                <label className={classes.tshirtPrice}>${props.shoePrice}</label>
            </div>
            {props.shoeCartQuanty === 0 ? 
            <div style={{textAlign: "center"}}>
                {props.location === null ? <Buttons disabled={true}>ADD TO CART</Buttons> :
                   <Buttons click={AddTshirtToCartHandler}>ADD TO CART</Buttons>}
            </div>
            :<div style={{display: "flex", justifyContent: "space-evenly"}}>
            <Button clicked={SubstractCartHandler}>-</Button>
            {props.shoeCartQuanty > 0 ? <label>{props.shoeCartQuanty}</label> : null }
            {props.shoeCartQuanty === 3 ? <Button disabled>+</Button> 
            : 
            <Button clicked={AddTshirtToCartHandler}>+</Button>}
            </div>}
            {props.shoeCartQuanty > 0 ? <label className={classes.quantyDisplay}
              >({props.shoeCartQuanty} item(s) added)</label> : null}
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
        shoePrice: state.shopListReducer.shoeData.shoePrice,
        shoeCartQuanty: state.shopListReducer.shoeData.shoeCartQuanty,
        location: state.shopListReducer.location //should be state.shopListReducer.shoeData.location
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: shopListActionType.SHOE_INCREMENT, payload: 1 }),
        decrement: () => dispatch({ type: shopListActionType.SHOE_DECREMENT, payload: 1 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoeDetails); 