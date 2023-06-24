import * as shopListActionType from  "../actions/shopListsAction";

const initialState = {
    location: null,
    tshirtData: {
        TshirtPrice: 8.50,
        tshirtCartQuanty: 0,
        deliveryFee: 0.00
    },
    watchData: {
        watchPrice: 15.99, 
        watchCartQuanty: 0,
        deliveryFee: 0.00
    },
    shoeData: {
        shoePrice: 18.55,
        shoeCartQuanty: 0,
        deliveryFee: 0.00
    }
};

//add a state update when they is a click to mutate the origin state and use the mutable one.

const shopListReducer = (state=initialState, action) => {
    switch(action.type) {
        case shopListActionType.LOCATION :
            return {
                ...state,
                location: state.location = action.payload
            }
        case(shopListActionType.TSHIRT_INCREMENT) : 
            return {
                ...state,
                tshirtCartQuanty: state.tshirtData.tshirtCartQuanty += action.payload
            }
        case(shopListActionType.TSHIRT_DECREMENT) :
            return {
                ...state,
                tshirtCartQuanty: state.tshirtData.tshirtCartQuanty -= action.payload
            }
        case(shopListActionType.WATCH_INCREMENT) : 
            return {
                ...state,
                watchCartQuanty: state.watchData.watchCartQuanty += action.payload
            }
        case(shopListActionType.WATCH_DECREMENT) :
            return {
                ...state,
                watchCartQuanty: state.watchData.watchCartQuanty -= action.payload
            }
        case(shopListActionType.SHOE_INCREMENT) : 
            return {
                ...state,
                shoeCartQuanty: state.shoeData.shoeCartQuanty += action.payload
            }
        case(shopListActionType.SHOE_DECREMENT) :
            return {
                ...state,
                shoeCartQuanty: state.shoeData.shoeCartQuanty -= action.payload
            }
        default:
           return state;
    }
}

export default shopListReducer;  