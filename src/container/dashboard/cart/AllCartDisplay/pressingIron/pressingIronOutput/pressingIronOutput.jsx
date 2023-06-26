import { useHistory } from "react-router-dom";
import Button from "../../../../../../util/button/button";
import Card from "../../../../../../shopDetails/detailsCard/card"; 


export const PressingIronOutput = props => {
    const quantity = props.quantity.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.pressingIronPrice;
    }, 0);

    const history = useHistory();

    return (
        <Card>
        <div>
            <img style={{width: "5em"}} src={props.pressingIronImage} alt="" />
            <div style={{display: "flex"}}>
                <div style={{fontSize: "1.2em"}}>price: </div>
                <div style={{fontSize: "1.2em", fontFamily: "sans-serif"}}>${props.pressingIronPrice}</div> 
            </div>  
            <div style={{display: "flex"}}>
                <div style={{fontSize: "1.2em"}}>Quantity selected:</div> 
                <div style={{fontSize: "1.2em", fontFamily: "inherit"}}>{props.quanty}</div> 
            </div>  
            {/* <div style={{display: "flex"}}> */}
            { quantity !== 0 ? <div style={{display: "flex"}}>
                   <div style={{fontSize: "1.2em"}}>Total amount to pay: </div>
                   <div style={{fontSize: "1.2em", fontFamily: "sans-serif"}}>${quantity}</div>
                </div> 
            : null }
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <Button click={() => localStorage.removeItem("pressingIronCartItems")}>Remove</Button>
                <Button click={() => history.push(`/$username-here/checkout/summary/place-order/pressingIron`)}>Checkout</Button>
            </div>
        </div>
        </Card>
    );
};

// fetch username from backend when user signin and display name on the button to checkout/summary