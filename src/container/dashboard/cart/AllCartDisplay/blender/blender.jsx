import BlenderOutput from "./blenderOutput/blenderOutput";

const blenderDisplayCartItemAddedToLocalStorage = (props) => {
    return (
        <div>
            {props.cartData.length !== 0 ?<BlenderOutput
               quantity={props.cartData} 
               quanty={props.cartData.length}
               blenderImage={props.cartData[0].blenderImage} 
               blenderPrice={props.cartData[0].blenderPrice}
            />: null}
        </div>
    );
};

export default blenderDisplayCartItemAddedToLocalStorage;