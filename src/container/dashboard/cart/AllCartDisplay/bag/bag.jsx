import BagOutput from "./bagOutput/bagOutput";

const bagDisplayCartItemAddedToLocalStorage = (props) => {
    return (
        <div>
            {props.cartData.length !== 0 ?<BagOutput
               quantity={props.cartData} 
               quanty={props.cartData.length}
               bagImage={props.cartData[0].bagImage} 
               bagPrice={props.cartData[0].bagPrice}
            />: null}
        </div>
    )
};

export default bagDisplayCartItemAddedToLocalStorage;