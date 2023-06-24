import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AlarmModel } from "../../../../shop/AlarmModel/alarmModel";
import bagImage from "../../../../../../assests/bag.jpg";
import { Button } from "../../../../../../util/button/cartButton"; 
import * as shopListActionType from "../../../../../../store/actions/shopAction";


const BagCartItems = (props) => {
    const [itemRemoveAlarm, setItemRemoveAlarm] = useState(false);
    const [itemAddAlarm, setItemAddAlarm] = useState(false);

    useEffect(() => {
        //add the bagCartQuanty, bagImage and bagPrice to localStorage
        if(props.bagCartQuanty === 1 && props.bagPrice === 8.50) {
            const data = { bagPrice: props.bagPrice, bagImage, quantity: props.bagCartQuanty }
            localStorage.setItem("bagCartItems", JSON.stringify([data]));
        }
        if(props.bagCartQuanty > 1) {
            JSON.parse(localStorage.getItem("bagCartItems"));
        }
    }, [props.bagCartQuanty, props.bagPrice]);

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
                    <Link to="/shop/bag/details"><img style={{width: "55%"}} src={bagImage} alt=""/></Link>
                      <div>${props.bagPrice}</div>
                        {props.bagCartQuanty === 0 ? 
                        <button type="submit" style={{borderRadius: "8px",
                                    background: "orange", color: "#fff"}} 
                           onClick={AddTshirtToCartHandler}>ADD TO CART</button> :
                        <div style={{display: "flex", justifyContent: "space-evenly"}}>
                        <Button clicked={SubstractCartHandler}>-</Button>
                        {props.bagCartQuanty > 0 ? <label>{props.bagCartQuanty}</label> : null }
                        {props.bagCartQuanty === 3 ? <Button disabled>+</Button> 
                        : 
                        <Button clicked={AddTshirtToCartHandler}>+</Button>}
                    </div>}
                    </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        bagPrice: state.shopReducer.bagData.bagPrice,
        bagCartQuanty: state.shopReducer.bagData.bagCartQuanty
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: shopListActionType.BAG_INCREMENT, payload: 1 }),
        decrement: () => dispatch({ type: shopListActionType.BAG_DECREMENT, payload: 1 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BagCartItems);