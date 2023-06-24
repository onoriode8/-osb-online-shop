import { WatchOutput } from "./watchOutput/watchOutput";

const WatchDisplayCartItemAddedToLocalStorage = (props) => {
    return (
        <div>
            {props.cartData.length !== 0 ?<WatchOutput
               quantity={props.cartData} 
               quanty={props.cartData.length}
               watchImage={props.cartData[0].WatchImage} 
               watchPrice={props.cartData[0].WatchPrice}
            />: null}
        </div>
    )
};

export default WatchDisplayCartItemAddedToLocalStorage;