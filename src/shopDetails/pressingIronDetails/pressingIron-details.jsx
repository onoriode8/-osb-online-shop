import React, { useState, useEffect, useCallback } from "react";
import pressingIronImage from "../../assests/pressing_iron.jpg";
import DetailsCard from "../detailsCard/card";
import classes from "./pressingIron-details.module.css";
import Buttons from "../../util/button/button";
import { connect } from "react-redux";
import AddressOfCustomer from "../../container/customerUtility/addressOfCustomer/addressOfCustmer";
import { AlarmModel } from "../../container/dashboard/shop/AlarmModel/alarmModel";
import { Button } from "../../util/button/cartButton";
import * as shopActionType from "../../store/actions/shopAction";


const PressingIronDetails = props => {
    const [itemRemoveAlarm, setItemRemoveAlarm] = useState(false);
    const [itemAddAlarm, setItemAddAlarm] = useState(false);

    useEffect(() => {
        if(props.pressingIronCartQuanty === 1 && props.pressingIronPrice === 8.50) {
            const data = { pressingIronPrice: props.pressingIronPrice, 
                pressingIronImage, quantity: props.pressingIronCartQuanty, location: props.location }
            localStorage.setItem("pressingIronCartItems", JSON.stringify([data]));
        }
        if(props.pressingIronCartQuanty > 1) {
            JSON.parse(localStorage.getItem("pressingIronCartItems"));
        }
    }, [props.pressingIronCartQuanty, props.pressingIronPrice, props.location]);

    const SubstractCartHandler = useCallback(() => {
        props.decrement(); 
            const parseData = JSON.parse(localStorage.getItem("pressingIronCartItems"))
            const data = parseData.splice(0, 1);
            setItemRemoveAlarm(true);
            setTimeout(() => {
                setItemRemoveAlarm(false);
            }, 1500);
            if(props.pressingIronCartQuanty === 0 || data.length === 1) {
                parseData.splice(0, 1);
                localStorage.setItem("pressingIronCartItems", JSON.stringify([]));
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
                <img className={classes.image} src={pressingIronImage} alt="" />
                </div>
                <div className={classes.text}>Quality Mini Electric Pressing Dry Iron</div>            
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <div></div>
                <label className={classes.tshirtPrice}>${props.pressingIronPrice}</label>
            </div>
            {props.pressingIronCartQuanty === 0 ? 
            <div style={{textAlign: "center"}}>
                {props.location === null ? <Buttons disabled={true}>ADD TO CART</Buttons> :
                   <Buttons click={AddTshirtToCartHandler}>ADD TO CART</Buttons>}
            </div>
            :<div style={{display: "flex", justifyContent: "space-evenly"}}>
            <Button clicked={SubstractCartHandler}>-</Button>
            {props.pressingIronCartQuanty > 0 ? <label>{props.pressingIronCartQuanty}</label> : null }
            {props.pressingIronCartQuanty === 3 ? <Button disabled>+</Button> 
            : 
            <Button clicked={AddTshirtToCartHandler}>+</Button>}
            </div>}
            {props.pressingIronCartQuanty > 0 ? <label className={classes.quantyDisplay}
              >({props.pressingIronCartQuanty} item(s) added)</label> : null}
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
        pressingIronPrice: state.shopReducer.pressingIronData.pressingIronPrice,
        pressingIronCartQuanty: state.shopReducer.pressingIronData.pressingIronCartQuanty,
        location: state.shopReducer.location //should be state.shopReducer.pressingIronData.location
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: shopActionType.PRESSING_IRON_INCREMENT, payload: 1 }),
        decrement: () => dispatch({ type: shopActionType.PRESSING_IRON_DECREMENT, payload: 1 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PressingIronDetails); 