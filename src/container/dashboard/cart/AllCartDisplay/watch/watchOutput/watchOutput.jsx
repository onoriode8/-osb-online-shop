import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Button from "../../../../../../util/button/button";
import Card from "../../../../../../shopDetails/detailsCard/card"; 


const WatchOutput = props => {
    const quantity = props.quantity.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.WatchPrice;
    }, 0);

    const history = useHistory();

    return (
        <Card>
        <div>
            <img style={{width: "5em"}} src={props.watchImage} alt="" />
            <div style={{display: "flex"}}>
                <div style={{fontSize: "1.2em"}}>price: </div>
                <div style={{fontSize: "1.2em", fontFamily: "sans-serif"}}>${props.watchPrice}</div>  {/* fetch the tshirtPrice from our redux store  */}
            </div>  
            <div style={{display: "flex"}}>
                <div style={{fontSize: "1.2em"}}>Quantity selected:</div> 
                <div style={{fontSize: "1.2em", fontFamily: "inherit"}}>{props.quanty}</div>  {/* fetch the tshirt-quantity from our redux store  */}
            </div>  
            {/* <div style={{display: "flex"}}> */}
            { quantity !== 0 ? <div style={{display: "flex"}}>
                   <div style={{fontSize: "1.2em"}}>Total amount to pay: </div>
                   <div style={{fontSize: "1.2em", fontFamily: "sans-serif"}}>${quantity}</div>
                </div> 
            : null }
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <Button click={() => localStorage.removeItem("watchCartItems")}>Remove</Button>
                <Button click={() => history.push(`/${props.username}/checkout/summary/place-order/watch`)}>Checkout</Button>
            </div>
        </div>
        </Card>
    );
};

const mapStateToProps = state => {
    return {
        username: state.authReducer.username
    }
};

export default connect(mapStateToProps)(WatchOutput);

// fetch username from backend when user signin and display name on the button to checkout/summary