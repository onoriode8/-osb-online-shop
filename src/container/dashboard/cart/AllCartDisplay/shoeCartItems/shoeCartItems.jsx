import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AlarmModel } from "../../../shop/AlarmModel/alarmModel";
import shoeImage from "../../../../../assests/shoe.jpg";
import { Button } from "../../../../../util/button/cartButton"; 
import * as shopListActionType from "../../../../../store/actions/shopListsAction";


const ShoeCartItems = (props) => {
    const [itemRemoveAlarm, setItemRemoveAlarm] = useState(false);
    const [itemAddAlarm, setItemAddAlarm] = useState(false);

    useEffect(() => {
        //add the watchCartQuanty, watchImage and watchPrice to localStorage
        if(props.shoeCartQuanty === 1 && props.shoePrice === 8.50) {
            const data = { shoePrice: props.shoePrice, shoeImage, quantity: props.shoeCartQuanty }
            localStorage.setItem("shoeCartItems", JSON.stringify([data]));
        }
        if(props.shoeCartQuanty > 1) {
            JSON.parse(localStorage.getItem("shoeCartItems"));
        }
    }, [props.shoeCartQuanty, props.shoePrice]);

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
                <div>
                    <Link to="/shop/shoe/details"><img style={{width: "55%"}} src={shoeImage} alt=""/></Link>
                      <div>${props.shoePrice}</div>
                        {props.shoeCartQuanty === 0 ? 
                        <button type="submit" style={{borderRadius: "8px",
                                    background: "orange", color: "#fff"}} 
                           onClick={AddTshirtToCartHandler}>ADD TO CART</button> :
                        <div style={{display: "flex", justifyContent: "space-evenly"}}>
                        <Button clicked={SubstractCartHandler}>-</Button>
                        {props.shoeCartQuanty > 0 ? <label>{props.shoeCartQuanty}</label> : null }
                        {props.shoeCartQuanty === 3 ? <Button disabled>+</Button> 
                        : 
                        <Button clicked={AddTshirtToCartHandler}>+</Button>}
                    </div>}
                    </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        shoePrice: state.shopListReducer.shoeData.shoePrice,
        shoeCartQuanty: state.shopListReducer.shoeData.shoeCartQuanty
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: shopListActionType.SHOE_INCREMENT, payload: 1 }),
        decrement: () => dispatch({ type: shopListActionType.SHOE_DECREMENT, payload: 1 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoeCartItems);