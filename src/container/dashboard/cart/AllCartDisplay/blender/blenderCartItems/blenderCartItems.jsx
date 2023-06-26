import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AlarmModel } from "../../../../shop/AlarmModel/alarmModel";
import blenderImage from "../../../../../../assests/blender.jpg";
import { Button } from "../../../../../../util/button/cartButton"; 
import * as shopListActionType from "../../../../../../store/actions/shopAction";


const BlenderCartItems = (props) => {
    const [itemRemoveAlarm, setItemRemoveAlarm] = useState(false);
    const [itemAddAlarm, setItemAddAlarm] = useState(false);

    useEffect(() => {
        //add the blenderCartQuanty, blenderImage and blenderPrice to localStorage
        if(props.blenderCartQuanty === 1 && props.blenderPrice === 8.50) {
            const data = { blenderPrice: props.blenderPrice, blenderImage, quantity: props.blenderCartQuanty }
            localStorage.setItem("blenderCartItems", JSON.stringify([data]));
        }
        if(props.blenderCartQuanty > 1) {
            JSON.parse(localStorage.getItem("blenderCartItems"));
        }
    }, [props.blenderCartQuanty, props.blenderPrice]);

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
                <div>
                    <Link to="/shop/blender/details"><img style={{width: "55%"}} src={blenderImage} alt=""/></Link>
                      <div>${props.blenderPrice}</div>
                        {props.blenderCartQuanty === 0 ? 
                        <button type="submit" style={{borderRadius: "8px",
                                    background: "orange", color: "#fff"}} 
                           onClick={AddBlenderToCartHandler}>ADD TO CART</button> :
                        <div style={{display: "flex", justifyContent: "space-evenly"}}>
                        <Button clicked={SubstractCartHandler}>-</Button>
                        {props.blenderCartQuanty > 0 ? <label>{props.blenderCartQuanty}</label> : null }
                        {props.blenderCartQuanty === 3 ? <Button disabled>+</Button> 
                        : 
                        <Button clicked={AddBlenderToCartHandler}>+</Button>}
                    </div>}
                    </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        blenderPrice: state.shopReducer.blenderData.blenderPrice,
        blenderCartQuanty: state.shopReducer.blenderData.blenderCartQuanty
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: shopListActionType.BLENDER_INCREMENT, payload: 1 }),
        decrement: () => dispatch({ type: shopListActionType.BLENDER_DECREMENT, payload: 1 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlenderCartItems);