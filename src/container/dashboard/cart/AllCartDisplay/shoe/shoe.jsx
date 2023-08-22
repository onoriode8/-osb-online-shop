import ShoeOutput from "./shoeOutput/shoeOutput";

const shoeDisplayCartItemAddedToLocalStorage = (props) => {
    return (
        <div>
            {props.cartData.length !== 0 ?<ShoeOutput
               quantity={props.cartData} 
               quanty={props.cartData.length}
               shoeImage={props.cartData[0].shoeImage} 
               shoePrice={props.cartData[0].shoePrice}
            />: null}
        </div>
    );
};

export default shoeDisplayCartItemAddedToLocalStorage;