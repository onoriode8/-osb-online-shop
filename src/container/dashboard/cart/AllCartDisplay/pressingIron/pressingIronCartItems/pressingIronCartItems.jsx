import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AlarmModel } from "../../../../shop/AlarmModel/alarmModel";
import pressingIronImage from "../../../../../../assests/pressing_iron.jpg";
import { Button } from "../../../../../../util/button/cartButton"; 
import * as shopListActionType from "../../../../../../store/actions/shopAction";


const PressingIronCartItems = (props) => {
    const [itemRemoveAlarm, setItemRemoveAlarm] = useState(false);
    const [itemAddAlarm, setItemAddAlarm] = useState(false);
    // const [pressingIronData, setPressingIronData] = useState(0);

    useEffect(() => {
        // const data = JSON.parse(localStorage.getItem("pressingIronCartItems"));
        // setPressingIronData(data);
        if(props.pressingIronCartQuanty === 1 && props.pressingIronPrice === 8.50) {
            const data = { pressingIronPrice: props.pressingIronPrice, pressingIronImage, quantity: props.pressingIronCartQuanty }
            localStorage.setItem("pressingIronCartItems", JSON.stringify([data]));
        }
        if(props.pressingIronCartQuanty > 1) {
            JSON.parse(localStorage.getItem("pressingIronCartItems"));
        }
    }, [props.pressingIronCartQuanty, props.pressingIronPrice]);

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
                <div>
                    <Link to="/shop/pressingIron/details"><img style={{width: "55%"}} src={pressingIronImage} alt=""/></Link>
                      <div>${props.pressingIronPrice}</div>
                        {props.pressingIronCartQuanty === 0 ? 
                        <button type="submit" style={{borderRadius: "8px",
                                    background: "orange", color: "#fff"}} 
                           onClick={AddTshirtToCartHandler}>ADD TO CART</button> :
                        <div style={{display: "flex", justifyContent: "space-evenly"}}>
                        <Button clicked={SubstractCartHandler}>-</Button>
                        {props.pressingIronCartQuanty > 0 ? <label>
                            {props.pressingIronCartQuanty}
                            {/* {pressingIronData.length} */}
                            </label> : null }
                        {props.pressingIronCartQuanty === 3 ? <Button disabled>+</Button> 
                        : 
                        <Button clicked={AddTshirtToCartHandler}>+</Button>}
                    </div>}
                    </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        pressingIronPrice: state.shopReducer.pressingIronData.pressingIronPrice,
        pressingIronCartQuanty: state.shopReducer.pressingIronData.pressingIronCartQuanty
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: shopListActionType.PRESSING_IRON_INCREMENT, payload: 1 }),
        decrement: () => dispatch({ type: shopListActionType.PRESSING_IRON_DECREMENT, payload: 1 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PressingIronCartItems);