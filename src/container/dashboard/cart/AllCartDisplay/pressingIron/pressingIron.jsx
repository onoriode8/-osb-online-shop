import PressingIronOutput from "./pressingIronOutput/pressingIronOutput";

const pressingIronDisplayCartItemAddedToLocalStorage = (props) => {
    return (
        <div>
            {props.cartData.length !== 0 ? <PressingIronOutput
               quantity={props.cartData} 
               quanty={props.cartData.length}
               pressingIronImage={props.cartData[0].pressingIronImage} 
               pressingIronPrice={props.cartData[0].pressingIronPrice}
            />: null}
        </div>
    )
};

export default pressingIronDisplayCartItemAddedToLocalStorage;