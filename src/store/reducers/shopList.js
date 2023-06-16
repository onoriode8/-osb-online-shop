

const initialState = {
    tshirtData: {
        TshirtPrice: 8.50,
        location: null,
        tshirtCartQuanty: 0,
        deliveryFee: 0.00
    },
    watchPrice: 15.99,
    shoePrice: 18.55,
};

//add a state update when they is a click to mutate the origin state and use the mutable one.

const shopListReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOCATION" :
            return {
                ...state,
                location: state.tshirtData.location = action.payload
            }
        case("INCREMENT") : 
            return {
                ...state,
                tshirtCartQuanty: state.tshirtData.tshirtCartQuanty += action.payload
            }
        case("DECREMENT") :
            return {
                ...state,
                tshirtCartQuanty: state.tshirtData.tshirtCartQuanty -= action.payload
            }
        default:
           return state;
    }
}

export default shopListReducer;  