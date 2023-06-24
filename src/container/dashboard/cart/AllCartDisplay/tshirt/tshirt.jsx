import { useHistory } from "react-router-dom";
import { TshirtOutput } from "./tshirtOutput/tshirtOutput";
import Button from "../../../../../util/button/button";

const TshirtDisplayCartItemAddedToLocalStorage = (props) => {

    const history = useHistory();

    let tshirtCartItems = 
         <div style={{textAlign: "center", marginTop: "4em"}}>
            <div>Nothing in Tshirt Cart yet!</div> 
            <Button click={() => history.push("/shop")}>Continue shopping.</Button>
         </div>;
    if(props.cartData.length !== 0) {
        return tshirtCartItems = <TshirtOutput
               quantity={props.cartData} 
               quanty={props.cartData.length}
               tshirtImage={props.cartData[0].TshirtImage} 
               tshirtPrice={props.cartData[0].TshirtPrice}
            />
    }
    return (
        <div>
            {tshirtCartItems}
        </div>
    )
};

export default TshirtDisplayCartItemAddedToLocalStorage;