import { TshirtOutput } from "./tshirtOutput/tshirtOutput";

const tshirtDisplayCartItemAddedToLocalStorage = (props) => {
    let tshirtCartItems = 
         <div>
            <div>Nothing in Cart yet!</div> 
            <div>Continue shopping.</div>
         </div>;
    if(props.cartData.length !== 0) {
        // return tshirtCartItems = props.cartData.map(items => {
        //     return <TshirtOutput key={items.TshirtPrice} 
        //        quantity={props.cartData} 
        //        quanty={props.cartData.length}
        //        tshirtImage={items.TshirtImage} 
        //        tshirtPrice={items.TshirtPrice}
        //     />
        // })
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

export default tshirtDisplayCartItemAddedToLocalStorage;