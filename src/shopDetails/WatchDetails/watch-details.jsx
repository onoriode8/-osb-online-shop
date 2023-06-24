import React, { useState, useEffect, useCallback } from "react";
import WatchImage from "../../assests/watch.jpg";
import DetailsCard from "../detailsCard/card";
import classes from "./watch-details.module.css";
import Buttons from "../../util/button/button";
import { connect } from "react-redux";
import AddressOfCustomer from "../../container/customerUtility/addressOfCustomer/addressOfCustmer";
import { AlarmModel } from "../../container/dashboard/shop/AlarmModel/alarmModel";
import { Button } from "../../util/button/cartButton";
import * as shopListActionType from "../../store/actions/shopListsAction";


const WatchDetails = props => {
    const [itemRemoveAlarm, setItemRemoveAlarm] = useState(false);
    const [itemAddAlarm, setItemAddAlarm] = useState(false);

    useEffect(() => {
        //add the tshirtCartQuanty, tshirtImage and tshirtPrice to localStorage
        if(props.watchCartQuanty === 1 && props.watchPrice === 8.50) {
            const data = { watchPrice: props.watchPrice, 
                WatchImage, quantity: props.watchCartQuanty, location: props.location }
            localStorage.setItem("watchCartItems", JSON.stringify([data]));
        }
        if(props.watchCartQuanty > 1) {
            JSON.parse(localStorage.getItem("watchCartItems"));
        }
    }, [props.watchCartQuanty, props.watchPrice, props.location]);

    const SubstractCartHandler = useCallback(() => {
        props.decrement(); 
            const parseData = JSON.parse(localStorage.getItem("watchCartItems"))
            const data = parseData.splice(0, 1);
            setItemRemoveAlarm(true);
            setTimeout(() => {
                setItemRemoveAlarm(false);
            }, 1500);
            if(props.watchCartQuanty === 0 || data.length === 1) {
                parseData.splice(0, 1);
                localStorage.setItem("watchCartItems", JSON.stringify([]));
            }
    }, [props]);

    const AddTshirtToCartHandler = useCallback(() => {
        props.increment();
        setItemAddAlarm(true);
            setTimeout(() => {
                setItemAddAlarm(false);
            }, 1500);
       
    }, [props]);

    console.log("location", props.location);

    return (
    <React.Fragment> 
        <AlarmModel itemRemoveAlarm={itemRemoveAlarm} itemAddAlarm={itemAddAlarm} />
        <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
        <DetailsCard>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <div>
                <img className={classes.image} src={WatchImage} alt="" />
                </div>
                <div className={classes.text}>Smart Watch Compatible IOS / Android - Black</div>            
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <div></div>
                <label className={classes.tshirtPrice}>${props.watchPrice}</label>
            </div>
            {props.watchCartQuanty === 0 ? 
            <div style={{textAlign: "center"}}>
                {props.location === null ? <Buttons disabled={true}>ADD TO CART</Buttons> :
                   <Buttons click={AddTshirtToCartHandler}>ADD TO CART</Buttons>}
            </div>
            :<div style={{display: "flex", justifyContent: "space-evenly"}}>
            <Button clicked={SubstractCartHandler}>-</Button>
            {props.watchCartQuanty > 0 ? <label>{props.watchCartQuanty}</label> : null }
            {props.watchCartQuanty === 3 ? <Button disabled>+</Button> 
            : 
            <Button clicked={AddTshirtToCartHandler}>+</Button>}
            </div>}
            {props.watchCartQuanty > 0 ? <label className={classes.quantyDisplay}
              >({props.watchCartQuanty} item(s) added)</label> : null}
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
        watchPrice: state.shopListReducer.watchData.watchPrice,
        watchCartQuanty: state.shopListReducer.watchData.watchCartQuanty,
        location: state.shopListReducer.location //should be state.shopListReducer.watchData.location
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: shopListActionType.WATCH_INCREMENT, payload: 1 }),
        decrement: () => dispatch({ type: shopListActionType.WATCH_DECREMENT, payload: 1 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchDetails); 