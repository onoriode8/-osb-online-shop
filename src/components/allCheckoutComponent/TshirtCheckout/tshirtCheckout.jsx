import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux"
import { AxiosInstance } from "../../axiosInstance/axiosInstance";
import Card from "../../.././shopDetails/detailsCard/card";
import Button from "../../../util/button/button";
import ErrorCard from "../../../util/card/errorCard/errorCard";
import { Spinner } from "../../../util/spinner/spinner";

const TshirtCheckout = (props) => {
    const [inputAddress, setInputAddress] = useState();
    const [inputChange, setInputChange] = useState(true);
    const [cartData, setCartData] = useState([])
    const [error, setError] = useState(null);
    const [errorDisplay, setErrorDisplay] = useState(false);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        const parseData = JSON.parse(localStorage.getItem("cartItems"));
        setCartData(parseData);
    }, []);    

    const onInputHandler = useCallback((e) => {
        const event = e.target.value;
        setInputChange(false)
        setInputAddress(event)
    }, []);

    let quanty = <div>Loading...</div>
    if(cartData.length !== 0) {
        quanty = cartData.reduce((accumulator, currentValue) => {
           return accumulator + currentValue.TshirtPrice;
        }, 0);
    }

    // add payment gateway e.g stripeJs to accept payment from customer card before booking delivery 
    const placeOrderOnTshirtHandler = async (event) => {
        event.preventDefault();
        setSpinner(true);
        const data = {
            quantity: cartData.length,
            deliveryFee: props.deliveryFee,
            total: quanty,
            image: cartData[0].TshirtImage
        }
        try {
            const response = await AxiosInstance.post("/${}/checkout/payment", data); //add user token to the url before sending to Nodejs backend
            console.log(response);  //continue from here and check if response contain data like fetch api
            setSpinner(false);
        } catch (err) {
            setSpinner(false)
            setErrorDisplay(true);
            setError(err.message);
        }
    };

    return (
        <React.Fragment>
            {spinner && 
            <div>
                <Spinner />
            </div>}
            <div>
                <ErrorCard error={error} errorDisplay={errorDisplay}
                 errorDisplayHandler={() => setErrorDisplay(false)} />  {/* add error card component to cancel error when pop up */}
            </div>
            <div style={{marginTop: "5em"}}>
               <input style={{width: "23em"}} type="search" placeholder="Enter delivery Address..."
                 onChange={onInputHandler} />
            </div>
            <div>
                <Card>
                    <div style={{fontFamily: "sans-serif"}}>Delivery Address</div>
                    <hr />
                    <div style={{fontFamily: "sans-serif"}}>{inputAddress}</div>
                </Card>
                <Card>
                    <div style={{fontFamily: "sans-serif"}}>Order summary</div>
                    <hr />
                    <div style={{display: "flex", justifyContent: "space-between", fontFamily: "sans-serif"}}>
                       <div>Item's total ({cartData.length})</div>
                       <div>${quanty}</div>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between", fontFamily: "sans-serif"}}>
                       <div>Delivery fees</div>
                       <div>{props.deliveryFee}</div>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between", fontFamily: "sans-serif"}}>
                        <div>Total</div>
                        <div>${quanty}</div>
                    </div>
                    <form>
                        <Button click={placeOrderOnTshirtHandler} disabled={inputChange}>CONFIRM ORDER</Button>
                    </form>
                </Card>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        deliveryFee: state.shopListReducer.tshirtData.deliveryFee
    }
};

export default connect(mapStateToProps)(TshirtCheckout);