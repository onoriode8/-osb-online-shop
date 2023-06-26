import React, { useState, useEffect, useCallback } from "react";
import blenderImage from "../../assests/blender.jpg";
import DetailsCard from "../detailsCard/card";
import classes from "./blender-details.module.css";
import Buttons from "../../util/button/button";
import { connect } from "react-redux";
import AddressOfCustomer from "../../container/customerUtility/addressOfCustomer/addressOfCustmer";
import { AlarmModel } from "../../container/dashboard/shop/AlarmModel/alarmModel";
import { Button } from "../../util/button/cartButton";
import * as shopActionType from "../../store/actions/shopAction";

const BlenderDetails = props => {
    const [itemRemoveAlarm, setItemRemoveAlarm] = useState(false);
    const [itemAddAlarm, setItemAddAlarm] = useState(false);

    useEffect(() => {
        if(props.blenderCartQuanty === 1 && props.blenderPrice === 8.50) {
            const data = { blenderPrice: props.blenderPrice, 
                blenderImage, quantity: props.blenderCartQuanty, location: props.location }
            localStorage.setItem("blenderCartItems", JSON.stringify([data]));
        }
        if(props.blenderCartQuanty > 1) {
            JSON.parse(localStorage.getItem("blenderCartItems"));
        }
    }, [props.blenderCartQuanty, props.blenderPrice, props.location]);

    const SubstractCartHandler = useCallback(() => {
        props.decrement(); 
            const parseData = JSON.parse(localStorage.getItem("blenderCartItems"))
            const data = parseData.splice(0, 1);
            setItemRemoveAlarm(true);
            setTimeout(() => {
                setItemRemoveAlarm(false);
            }, 1500);
            if(props.blenderCartQuanty === 0 || data.length === 1) {
                parseData.splice(0, 1);
                localStorage.setItem("blenderCartItems", JSON.stringify([]));
            }
    }, [props]);

    const AddBlenderToCartHandler = useCallback(() => {
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
                <img className={classes.image} src={blenderImage} alt="" />
                </div>
                <div className={classes.text}>Silver Crest 2 Litres German Industrial Blender With Mill Jar</div>            
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <div></div>
                <label className={classes.tshirtPrice}>${props.blenderPrice}</label>
            </div>
            {props.blenderCartQuanty === 0 ? 
            <div style={{textAlign: "center"}}>
                {props.location === null ? <Buttons disabled={true}>ADD TO CART</Buttons> :
                   <Buttons click={AddBlenderToCartHandler}>ADD TO CART</Buttons>}
            </div>
            :<div style={{display: "flex", justifyContent: "space-evenly"}}>
            <Button clicked={SubstractCartHandler}>-</Button>
            {props.blenderCartQuanty > 0 ? <label>{props.blenderCartQuanty}</label> : null }
            {props.blenderCartQuanty === 3 ? <Button disabled>+</Button> 
            : 
            <Button clicked={AddBlenderToCartHandler}>+</Button>}
            </div>}
            {props.blenderCartQuanty > 0 ? <label className={classes.quantyDisplay}
              >({props.blenderCartQuanty} item(s) added)</label> : null}
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
        blenderPrice: state.shopReducer.blenderData.blenderPrice,
        blenderCartQuanty: state.shopReducer.blenderData.blenderCartQuanty,
        location: state.shopReducer.location //should be state.shopReducer.blenderData.location
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: shopActionType.BLENDER_INCREMENT, payload: 1 }),
        decrement: () => dispatch({ type: shopActionType.BLENDER_DECREMENT, payload: 1 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlenderDetails); 