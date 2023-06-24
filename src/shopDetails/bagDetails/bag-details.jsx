import React, { useState, useEffect, useCallback } from "react";
import bagImage from "../../assests/bag.jpg";
import DetailsCard from "../detailsCard/card";
import classes from "./bag-details.module.css";
import Buttons from "../../util/button/button";
import { connect } from "react-redux";
import AddressOfCustomer from "../../container/customerUtility/addressOfCustomer/addressOfCustmer";
import { AlarmModel } from "../../container/dashboard/shop/AlarmModel/alarmModel";
import { Button } from "../../util/button/cartButton";
import * as shopActionType from "../../store/actions/shopAction";


const BagDetails = props => {
    const [itemRemoveAlarm, setItemRemoveAlarm] = useState(false);
    const [itemAddAlarm, setItemAddAlarm] = useState(false);

    useEffect(() => {
        //add the tshirtCartQuanty, tshirtImage and tshirtPrice to localStorage
        if(props.bagCartQuanty === 1 && props.bagPrice === 8.50) {
            const data = { bagPrice: props.bagPrice, 
                bagImage, quantity: props.bagCartQuanty, location: props.location }
            localStorage.setItem("bagCartItems", JSON.stringify([data]));
        }
        if(props.bagCartQuanty > 1) {
            JSON.parse(localStorage.getItem("bagCartItems"));
        }
    }, [props.bagCartQuanty, props.bagPrice, props.location]);

    const SubstractCartHandler = useCallback(() => {
        props.decrement(); 
            const parseData = JSON.parse(localStorage.getItem("bagCartItems"))
            const data = parseData.splice(0, 1);
            setItemRemoveAlarm(true);
            setTimeout(() => {
                setItemRemoveAlarm(false);
            }, 1500);
            if(props.bagCartQuanty === 0 || data.length === 1) {
                parseData.splice(0, 1);
                localStorage.setItem("bagCartItems", JSON.stringify([]));
            }
    }, [props]);

    const AddBagToCartHandler = useCallback(() => {
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
                <img className={classes.image} src={bagImage} alt="" />
                </div>
                <div className={classes.text}>Smart bag Compatible - Black and white</div>            
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <div></div>
                <label className={classes.tshirtPrice}>${props.bagPrice}</label>
            </div>
            {props.bagCartQuanty === 0 ? 
            <div style={{textAlign: "center"}}>
                {props.location === null ? <Buttons disabled={true}>ADD TO CART</Buttons> :
                   <Buttons click={AddBagToCartHandler}>ADD TO CART</Buttons>}
            </div>
            :<div style={{display: "flex", justifyContent: "space-evenly"}}>
            <Button clicked={SubstractCartHandler}>-</Button>
            {props.bagCartQuanty > 0 ? <label>{props.bagCartQuanty}</label> : null }
            {props.bagCartQuanty === 3 ? <Button disabled>+</Button> 
            : 
            <Button clicked={AddBagToCartHandler}>+</Button>}
            </div>}
            {props.bagCartQuanty > 0 ? <label className={classes.quantyDisplay}
              >({props.bagCartQuanty} item(s) added)</label> : null}
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
        bagPrice: state.shopReducer.bagData.bagPrice,
        bagCartQuanty: state.shopReducer.bagData.bagCartQuanty,
        location: state.shopReducer.location //should be state.shopReducer.bagData.location
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: shopActionType.BAG_INCREMENT, payload: 1 }),
        decrement: () => dispatch({ type: shopActionType.BAG_DECREMENT, payload: 1 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BagDetails); 