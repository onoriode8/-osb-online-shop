import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AlarmModel } from "../../../shop/AlarmModel/alarmModel";
import WatchImage from "../../../../../assests/watch.jpg";
import { Button } from "../../../../../util/button/cartButton"; 
import * as shopListActionType from "../../../../../store/actions/shopListsAction";


const WatchCartItems = (props) => {
    const [itemRemoveAlarm, setItemRemoveAlarm] = useState(false);
    const [itemAddAlarm, setItemAddAlarm] = useState(false);

    useEffect(() => {
        //add the watchCartQuanty, watchImage and watchPrice to localStorage
        if(props.watchCartQuanty === 1 && props.WatchPrice === 8.50) {
            const data = { WatchPrice: props.WatchPrice, WatchImage, quantity: props.watchCartQuanty }
            localStorage.setItem("watchCartItems", JSON.stringify([data]));
        }
        if(props.watchCartQuanty > 1) {
            JSON.parse(localStorage.getItem("watchCartItems"));
        }
    }, [props.watchCartQuanty, props.WatchPrice]);

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

    return (
        <React.Fragment>
            <AlarmModel itemRemoveAlarm={itemRemoveAlarm} itemAddAlarm={itemAddAlarm} />
                <div>
                    <Link to="/shop/watch/details"><img style={{width: "55%"}} src={WatchImage} alt=""/></Link>
                      <div>${props.WatchPrice}</div>
                        {props.watchCartQuanty === 0 ? 
                        <button type="submit" style={{borderRadius: "8px",
                                    background: "orange", color: "#fff"}} 
                           onClick={AddTshirtToCartHandler}>ADD TO CART</button> :
                        <div style={{display: "flex", justifyContent: "space-evenly"}}>
                        <Button clicked={SubstractCartHandler}>-</Button>
                        {props.watchCartQuanty > 0 ? <label>{props.watchCartQuanty}</label> : null }
                        {props.watchCartQuanty === 3 ? <Button disabled>+</Button> 
                        : 
                        <Button clicked={AddTshirtToCartHandler}>+</Button>}
                    </div>}
                    </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        WatchPrice: state.shopListReducer.watchData.watchPrice,
        watchCartQuanty: state.shopListReducer.watchData.watchCartQuanty
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: shopListActionType.WATCH_INCREMENT, payload: 1 }),
        decrement: () => dispatch({ type: shopListActionType.WATCH_DECREMENT, payload: 1 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchCartItems);