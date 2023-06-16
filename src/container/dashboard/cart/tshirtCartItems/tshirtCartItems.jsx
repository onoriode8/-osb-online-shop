import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AlarmModel } from "../../shop/AlarmModel/alarmModel";
import TshirtImage from "../../../../assests/t-shirt.jpg";
import { Button } from "../../../../util/button/cartButton"; 


const TshirtCartItems = (props) => {
    const [itemRemoveAlarm, setItemRemoveAlarm] = useState(false);
    const [itemAddAlarm, setItemAddAlarm] = useState(false);

    useEffect(() => {
        console.log("useEffect runs in shopLists components");
        //add the tshirtCartQuanty, tshirtImage and tshirtPrice to localStorage
        if(props.tshirtCartQuanty === 1 && props.TshirtPrice === 8.50) {
            const data = { TshirtPrice: props.TshirtPrice, TshirtImage, quantity: props.tshirtCartQuanty }
            localStorage.setItem("cartItems", JSON.stringify([data]));
        }
        if(props.tshirtCartQuanty > 1) {
            JSON.parse(localStorage.getItem("cartItems"));
        }
    }, [props.tshirtCartQuanty, props.TshirtPrice]);


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
        props.increment();  console.log("Clicked")
        setItemAddAlarm(true);
            setTimeout(() => {
                setItemAddAlarm(false);
            }, 1500);
       
    }, [props]);

    return (
        <React.Fragment>
            <AlarmModel itemRemoveAlarm={itemRemoveAlarm} itemAddAlarm={itemAddAlarm} />
                <div>
                    <Link to="/shop/t-shirt/details"><img style={{width: "55%"}} src={TshirtImage} alt=""/></Link>
                      <div>${props.TshirtPrice}</div>
                        {props.tshirtCartQuanty === 0 ? 
                        <button type="submit" style={{borderRadius: "8px",
                                    background: "orange", color: "#fff"}} 
                           onClick={AddTshirtToCartHandler}>ADD TO CART</button> :
                        <div style={{display: "flex", justifyContent: "space-evenly"}}>
                        <Button clicked={SubstractCartHandler}>-</Button>
                        {props.tshirtCartQuanty > 0 ? <label>{props.tshirtCartQuanty}</label> : null }
                        {props.tshirtCartQuanty === 3 ? <Button disabled>+</Button> 
                        : 
                        <Button clicked={AddTshirtToCartHandler}>+</Button>}
                    </div>}
                    </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        TshirtPrice: state.shopListReducer.tshirtData.TshirtPrice,
        tshirtCartQuanty: state.shopListReducer.tshirtData.tshirtCartQuanty
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: "INCREMENT", payload: 1 }),
        decrement: () => dispatch({ type: "DECREMENT", payload: 1 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TshirtCartItems);